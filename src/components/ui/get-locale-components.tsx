"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Body } from "./typography";

export const RoleText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const localeText = useTranslations("Home");

  return (
    <Body ref={ref} className="text-center" {...props}>
      {localeText("role")}
    </Body>
  );
});
RoleText.displayName = "RoleText";
