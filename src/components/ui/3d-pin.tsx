"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Create context for managing expanded pins
const PinContext = createContext<{
  expandedPin: string | null;
  setExpandedPin: (id: string | null) => void;
  pinIds: string[];
  registerPin: (id: string) => void;
  unregisterPin: (id: string) => void;
} | undefined>(undefined);

export const PinProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandedPin, setExpandedPin] = useState<string | null>(null);
  const [pinIds, setPinIds] = useState<string[]>([]);

  const registerPin = (id: string) => {
    setPinIds(prev => [...prev, id]);
  };

  const unregisterPin = (id: string) => {
    setPinIds(prev => prev.filter(pinId => pinId !== id));
  };

  return (
    <PinContext.Provider value={{
      expandedPin,
      setExpandedPin,
      pinIds,
      registerPin,
      unregisterPin
    }}>
      {children}
    </PinContext.Provider>
  );
};

export const usePinContext = () => {
  const context = useContext(PinContext);
  if (!context) {
    throw new Error("usePinContext must be used within a PinProvider");
  }
  return context;
};

let pinIdCounter = 0;

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  icon,
  subheading,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
  subheading?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const context = usePinContext();
  const { expandedPin, setExpandedPin, pinIds, registerPin, unregisterPin } = context;
  
  // Generate unique ID for this pin
  const [pinId] = useState(() => `pin-${++pinIdCounter}`);

  useEffect(() => {
    registerPin(pinId);
    return () => unregisterPin(pinId);
  }, [pinId, registerPin, unregisterPin]);

  const isExpanded = expandedPin === pinId;

  const cardRef = React.useRef<HTMLDivElement>(null);
  
  useOutsideClick(cardRef, () => setExpandedPin(null));

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedPin(isExpanded ? null : pinId);
  };

  // Handle scroll navigation
  useEffect(() => {
    if (!isExpanded) return;

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      const currentIndex = pinIds.indexOf(expandedPin || '');
      if (currentIndex === -1) return;

      if (e.deltaY > 0) {
        // Scroll down - go to next pin or close if last
        const nextIndex = currentIndex + 1;
        if (nextIndex < pinIds.length) {
          setExpandedPin(pinIds[nextIndex]);
        } else {
          setExpandedPin(null);
        }
      } else {
        // Scroll up - go to previous pin or close if first
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          setExpandedPin(pinIds[prevIndex]);
        } else {
          setExpandedPin(null);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = pinIds.indexOf(expandedPin || '');
      if (currentIndex === -1) return;

      if (e.key === 'Escape') {
        setExpandedPin(null);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex + 1;
        if (nextIndex < pinIds.length) {
          setExpandedPin(pinIds[nextIndex]);
        } else {
          setExpandedPin(null);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          setExpandedPin(pinIds[prevIndex]);
        } else {
          setExpandedPin(null);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Disable body scroll when expanded
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded, setExpandedPin, expandedPin, pinIds]);

  return (
    <>
      <a
        className={cn(
          "relative group/pin z-50 cursor-pointer",
          containerClassName
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleClick}
      >
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="absolute left-1/2 p-8 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-gradient-to-br from-[#4a6fd9] via-white to-[#6b8ef0] border border-white/[0.3] group-hover/pin:border-blue-200/[0.7] transition duration-700 overflow-hidden w-96"
          >
            <div className={cn("relative z-50", className)}>
              {/* Show icon in the pin card if provided */}
              {icon && (
                <div className="mb-4 flex justify-center">
                  {icon}
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
        <PinPerspective title={title} href={href} />
      </a>

      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[65] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setExpandedPin(null)} 
            />
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-none shadow-2xl p-8"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-6 h-full">
                <button 
                  className="absolute top-4 right-4 text-white text-2xl z-10"
                  onClick={() => setExpandedPin(null)}
                >
                  ✕
                </button>
                {icon && <div className="w-20 h-20 flex items-center justify-center">{icon}</div>}
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                {subheading && <p className="text-xl text-white/90">{subheading}</p>}
                <div className="mt-4 w-full max-w-2xl">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-gradient-to-br from-primary via-primary to-secondary py-2 px-6 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-lg font-bold inline-block py-2 px-2">
              <AuroraText className="text-white text-lg font-bold">{title}</AuroraText>
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};