import * as React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"

export interface SocialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  link: string,
  icon: React.ReactElement,
  name: string,
  userName: string;
}

const SocialCard = React.forwardRef<
  HTMLDivElement,
  SocialCardProps
>(({ className, icon, link, name, userName, ...props }, ref) => {
    
    return (
    <div ref={ref} className={cn("flex flex-col gap-2 justify-center items-center", className)} {...props}>
    {icon}
    <p className="text-gray-500">{name}</p>
    <Link className="link-underline neon-glow" target="__blank" href={link}>{userName}</Link>
  </div>
)});

SocialCard.displayName = "SocialCard"

export { SocialCard }
