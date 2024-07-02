import * as React from "react"

import { cn } from "@/lib/utils"
import personalInfo from "hiaguedes/info.json";


const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className,  ...props }, ref) => {
    
    return (
    <footer    
    ref={ref}
    className={cn(
      "w-full px-12 py-8 bg-zinc-700 m-0",
      className
    )}
    {...props}
    >
        <p>Desenvolvido por {personalInfo.name} usando Next.js, Tailwind e shadcn/ui</p>
    </footer>
)});

Footer.displayName = "Footer"

export { Footer }