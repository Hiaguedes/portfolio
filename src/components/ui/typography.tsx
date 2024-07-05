import { cn } from "@/lib/utils";
import React from "react";

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