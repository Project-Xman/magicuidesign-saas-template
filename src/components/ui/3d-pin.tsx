"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Lottie from "lottie-react";

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

// Lottie Animation Component with Enhanced Features
const LottieAnimation = ({ 
  animationPath, 
  className,
  loop = true,
  autoplay = true,
  speed = 1
}: { 
  animationPath: string; 
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}) => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(animationPath);
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`);
        }
        
        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        console.error('Error loading Lottie animation:', err);
        setError(err instanceof Error ? err.message : 'Failed to load animation');
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, [animationPath]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-blue-300 opacity-75"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-2">⚠️</div>
          <p className="text-sm">Animation failed to load</p>
        </div>
      </div>
    );
  }

  if (!animationData) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          clearCanvas: false,
          progressiveLoad: true,
          hideOnTransparent: true
        }}
      />
    </motion.div>
  );
};

// Different animations for each card
const getCardAnimation = (title: string) => {
  const animations = {
    "Work": {
      initial: { opacity: 0, scale: 0.8, rotateY: -15 },
      animate: { opacity: 1, scale: 1, rotateY: 0 },
      exit: { opacity: 0, scale: 0.9, rotateY: 15 }
    },
    "Earn": {
      initial: { opacity: 0, x: -100, rotateX: -10 },
      animate: { opacity: 1, x: 0, rotateX: 0 },
      exit: { opacity: 0, x: 100, rotateX: 10 }
    },
    "Access Pay": {
      initial: { opacity: 0, y: -100, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 100, scale: 0.9 }
    },
    "Peace of Mind": {
      initial: { opacity: 0, scale: 1.1, rotateZ: -5 },
      animate: { opacity: 1, scale: 1, rotateZ: 0 },
      exit: { opacity: 0, scale: 0.8, rotateZ: 5 }
    }
  };
  
  return animations[title as keyof typeof animations] || {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };
};

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

  // Handle scroll navigation with automatic closing
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

      <AnimatePresence mode="wait">
        {isExpanded && (
          <div className="fixed inset-0 z-[75] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setExpandedPin(null)} 
            />
            <motion.div
              ref={cardRef}
              initial={getCardAnimation(title || "").initial}
              animate={getCardAnimation(title || "").animate}
              exit={getCardAnimation(title || "").exit}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full h-full bg-gradient-to-br from-[#4a6fd9] via-white to-[#6b8ef0] rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.3] p-8 overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-6 h-full">
                {/* Close button - only show on last card */}
                {pinIds.indexOf(expandedPin || '') === pinIds.length - 1 && (
                  <button 
                    className="absolute top-4 right-4 text-gray-800 hover:text-gray-900 text-3xl z-10 font-bold transition-all duration-300 hover:scale-110"
                    onClick={() => setExpandedPin(null)}
                  >
                    ✕
                  </button>
                )}
                
                {/* Mouse scroll icon - only show if not last card */}
                {pinIds.indexOf(expandedPin || '') < pinIds.length - 1 && (
                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <p className="text-gray-700 text-sm font-medium">Scroll to continue</p>
                      <motion.div
                        className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-1 h-3 bg-gray-700 rounded-full mt-2"
                          animate={{ y: [0, 12, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                {title === "Work" ? (
                  <div className="w-full max-w-4xl mx-auto mb-8 rounded-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                      className="relative"
                    >
                      <LottieAnimation 
                        animationPath="/work-from-home.json"
                        className="w-full h-80 max-w-lg mx-auto drop-shadow-lg rounded-3xl"
                        loop={true}
                        autoplay={true}
                        speed={1}
                      />
                      {/* Optional overlay for better visual integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none rounded-lg"></div>
                    </motion.div>
                  </div>
                ) : (
                  icon && <div className="w-24 h-24 flex items-center justify-center">{icon}</div>
                )}
                 <h2 className="text-5xl font-bold mb-4">
                      <AuroraText className="bg-gradient-to-r from-[#4a6fd9] via-[#6b8ef0] to-[#4a6fd9] bg-clip-text text-transparent text-5xl font-bold">
                        {title}
                      </AuroraText>
                    </h2>
                    {subheading && (
                      <p className="text-lg text-gray-700 font-normal mb-6">
                        {subheading}
                      </p>
                )}
                <div className="mt-4 w-full max-w-2xl">
                  {/* {children} */}
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