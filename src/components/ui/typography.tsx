import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type TextsVariant = {
    variant?: 'emphasis' | 'normal'}

export const Title = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    return <h2 ref={ref} className={cn("text-4xl", className)} {...props}>{children}</h2>
});
Title.displayName = "Title"

export const Subtitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    return <h3 ref={ref} className={cn("text-xl", className)} {...props}>{children}</h3>
});
Subtitle.displayName = "Subtitle"

export const Body = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    return <p ref={ref} className={cn("text-gray-500", className)} {...props}>{children}</p>
});
Body.displayName = "Body"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    target?: string
  }

type LinkTextProps = LinkProps & TextsVariant & PropsWithChildren<{ className?: string }>;

export const LinkText = React.forwardRef<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkTextProps 
>(({ className, children, href, variant = 'normal' , ...props }, ref) => {
    return <Link href={href} className={cn("link-underline neon-glow", variant === 'emphasis' && "text-yellow-400", className)} {...props}>{children}</Link>
});
LinkText.displayName = "LinkText"
