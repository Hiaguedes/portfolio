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
      "w-full px-12 py-8 bg-zinc-800 m-0 mt-4",
      className
    )}
    {...props}
    >
        <p>Desenvolvido por {personalInfo.name}, clique pra saber mais detalhes desse projeto</p>
    </footer>
)});

Footer.displayName = "Footer"

export { Footer }