"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  onVisibleChange?: (visible: boolean) => void;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className, onVisibleChange }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  useEffect(() => {
    onVisibleChange?.(visible);
  }, [visible, onVisibleChange]);

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 top-20 z-70 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px) saturate(180%)" : "none",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "1000px",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-2xl px-4 py-2 lg:flex",
        "bg-white/10 border border-white/20 backdrop-blur-md",
        "dark:bg-black/10 dark:border-white/10",
        visible && "bg-white/20 border-white/30 dark:bg-black/20 dark:border-white/15",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-700/90 dark:text-zinc-200/90 transition duration-200 hover:text-zinc-900 dark:hover:text-white lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-current"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-primary/20 dark:bg-primary/10 backdrop-blur-sm border border-primary/30 dark:border-primary/20"
            />
          )}
          <span className={cn("relative z-20 font-medium", hovered === idx ? "text-zinc-900 dark:text-white" : "")}>{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px) saturate(180%)" : "blur(8px) saturate(120%)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)"
          : "0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "16px" : "32px",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        "bg-white/10 border border-white/20 backdrop-blur-md",
        "dark:bg-black/10 dark:border-white/10",
        visible && "bg-white/20 border-white/30 dark:bg-black/20 dark:border-white/15",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl px-4 py-8",
            "bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl",
            "dark:bg-black/15 dark:border-white/15",
            "shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-zinc-700 dark:text-zinc-200"
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={130}
        height={170}
        priority={true}
        className="h-14 w-auto object-contain"
      />
    </Link>
  );
};

export const NavbarThemeToggle = ({ className }: { className?: string }) => {
  return (
    <AnimatedThemeToggler 
      className={cn(
        "relative z-20 p-2 rounded-full transition-all duration-200",
        "bg-white/20 border border-white/30 backdrop-blur-sm",
        "dark:bg-white/10 dark:border-white/20",
        "hover:bg-white/30 hover:border-white/40 dark:hover:bg-white/15 dark:hover:border-white/25",
        "text-zinc-700 dark:text-zinc-200",
        className
      )} 
    />
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-xl text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center backdrop-blur-sm border";

  const variantStyles = {
    primary:
      "bg-white/20 text-zinc-700 dark:text-zinc-200 border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/15 hover:border-white/40 dark:hover:border-white/25",
    secondary: 
      "bg-transparent text-zinc-700 dark:text-zinc-200 border-white/20 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/30 dark:hover:border-white/15",
    dark: 
      "bg-black/20 text-white border-black/30 dark:bg-white/20 dark:text-black dark:border-white/30 hover:bg-black/30 dark:hover:bg-white/30",
    gradient:
      "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-zinc-700 dark:text-zinc-200 border-white/30 dark:border-white/20 hover:from-blue-500/30 hover:to-purple-500/30",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};