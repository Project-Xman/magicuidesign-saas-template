"use client";

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  "rounded-md bg-muted",
  {
    variants: {
      variant: {
        default: "animate-pulse",
        shimmer: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        wave: "animate-pulse-soft",
        glow: "relative overflow-hidden animate-pulse before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:animate-pulse",
      },
      size: {
        default: "",
        sm: "h-4",
        md: "h-6",
        lg: "h-8",
        xl: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({
  className,
  variant,
  size,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Enhanced skeleton components for common use cases
function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      className={cn("card-premium p-6 space-y-4", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <Skeleton variant="shimmer" className="h-4 w-3/4" />
      <Skeleton variant="shimmer" className="h-3 w-full" />
      <Skeleton variant="shimmer" className="h-3 w-5/6" />
      <div className="flex space-x-2">
        <Skeleton variant="shimmer" className="h-8 w-20" />
        <Skeleton variant="shimmer" className="h-8 w-16" />
      </div>
    </motion.div>
  )
}

function SkeletonAvatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Skeleton
      variant="shimmer"
      className={cn("h-12 w-12 rounded-full", className)}
      {...props}
    />
  )
}

function SkeletonButton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Skeleton
      variant="shimmer"
      className={cn("h-10 w-24 rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton, SkeletonCard, SkeletonAvatar, SkeletonButton }
