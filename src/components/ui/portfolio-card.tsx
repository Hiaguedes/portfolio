import * as React from "react"

import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import { SiCsharp, SiCss3, SiGithubactions, SiJavascript, SiNpm, SiReact, SiRedux, SiRust, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"

const PorfolioCardBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-lg border bg-card text-card-foreground shadow-sm xl:size-1/4 lg:size-1/3 size-full hover:scale-110 transform transition-transform duration-500",
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
    className={cn("flex flex-col space-y-1.5 p-6 h-24", className)}
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

export type TechVariants = 'npm' | 'typescript' | 'next' | 'react' | 'redux' | 'styled-components'| 'tailwind' | 'cSharp' | 'gh-actions' | 'css' | 'javascript' | 'rust';

const PortfolioCardContent = React.forwardRef<
  HTMLImageElement,
  ImageProps & {
    hover?: boolean,
    techsUsed?: TechVariants[]
  }
>(({ className, alt, hover, techsUsed, ...props }, ref) => {

  const Icons = new Map<TechVariants, React.ReactElement>([
    ['npm', <SiNpm key="npm" size={20} />],
    ['typescript',  <SiTypescript key="typescript" size={20} />],
    ['next', <RiNextjsFill key="next" size={20} />],
    ['react', <SiReact key="react" size={20} />],
    ['redux', <SiRedux key="redux" size={20} />],
    ['styled-components', <SiStyledcomponents key="styled" size={20} />],
    ['cSharp', <SiCsharp key="cSharp" size={20} />],
    ['tailwind', <SiTailwindcss key="tailwind" size={20} />],
    ['gh-actions', <SiGithubactions key="gh-actions" size={20} />],
    ['javascript', <SiJavascript key="javascript" size={20} />],
    ['css', <SiCss3 key="css" size={20} />],
    ['rust', <SiRust key="rust" size={20} />],
  ])

  return(
  <div className="w-full flex items-center justify-center aspect-video">
    <Image  
      alt={alt ?? 'Imagem do projeto'} 
      ref={ref} 
      className={cn("w-full aspect-video", className)} 
      width={0}
      height={0}
      unoptimized
      objectFit="contain"
      {...props}
      />
      {!hover && <div className="absolute bottom-6 h-8 flex flex-row gap-2">
        {techsUsed?.map((tech) => Icons.get(tech))}
      </div>}
    </div>
)})
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
