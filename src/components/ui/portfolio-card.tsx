import * as React from "react"

import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import { SiCsharp, SiNpm, SiReact, SiRedux, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"

const PorfolioCardBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-lg border bg-card text-card-foreground shadow-sm size-1/4 hover:scale-110 transform transition-transform duration-500",
      className
    )}
    {...props}
  />
))
PorfolioCardBase.displayName = "PorfolioCardBase"

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
  HTMLImageElement,
  ImageProps & {
    hover?: boolean
  }
>(({ className, alt, hover, ...props }, ref) => (
  <div className="w-full relative flex items-center justify-center">
  <Image  
     alt={alt ?? 'Imagem do projeto'} 
     ref={ref} 
     className={cn("w-full h-3/5 object-cover", className)} 
     width={200}
     height={200}
     unoptimized
     {...props}
    />
    {!hover && <div className="absolute bottom-6 h-8 flex flex-row gap-2">
      <SiTypescript size={20} />
      <SiNpm size={20} />
      <RiNextjsFill size={20} />
      <SiReact size={20} />
      <SiRedux size={20} />
      <SiStyledcomponents size={20} />
      <SiCsharp size={20} />
      <SiTailwindcss size={20} />
    </div>}
    </div>
))
PortfolioCardContent.displayName = "PortfolioCardContent"

const PortfolioCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center bg-gray-600", className)}
    {...props}
  />
))
PortfolioCardFooter.displayName = "PortfolioCardFooter"

export { PorfolioCardBase, PortfolioCardHeader, PortfolioCardFooter, PortfolioCardTitle, PortfolioCardDescription, PortfolioCardContent }
