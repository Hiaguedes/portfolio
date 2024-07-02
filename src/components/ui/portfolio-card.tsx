import * as React from "react"

import { cn } from "@/lib/utils"

const PorfolioCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm size-1/4 h-80 hover:scale-110 transform transition-transform duration-500",
      className
    )}
    {...props}
  />
))
PorfolioCard.displayName = "PorfolioCard"

const PortfolioCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 h-1/4", className)}
    {...props}
  />
))
PortfolioCardHeader.displayName = "PortfolioCardHeader"

const PortfolioCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
PortfolioCardTitle.displayName = "PortfolioCardTitle"

const PortfolioCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
PortfolioCardDescription.displayName = "PortfolioCardDescription"

const PortfolioCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 h-2/4", className)} {...props} />
))
PortfolioCardContent.displayName = "PortfolioCardContent"

const PortfolioCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 bg-gray-600 h-1/4", className)}
    {...props}
  />
))
PortfolioCardFooter.displayName = "PortfolioCardFooter"

export { PorfolioCard, PortfolioCardHeader, PortfolioCardFooter, PortfolioCardTitle, PortfolioCardDescription, PortfolioCardContent }
