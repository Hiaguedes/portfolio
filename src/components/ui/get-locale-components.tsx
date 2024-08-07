"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Body, Subtitle, Title } from "./typography";
import useTranslationClientTexts from "@/hooks/useTranslationClientTexts";

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

type AboutTitleProps = {
  variant:
    | "name"
    | "dependencies"
    | "devDependencies"
    | "version"
    | "nodeVersion";
};

export const AboutTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & AboutTitleProps
>(({ className, children, variant, ...props }, ref) => {
  const {
    about: { name, dependencies, devDependencies, version, nodeVersion },
  } = useTranslationClientTexts();

  const mapVariant = new Map<AboutTitleProps["variant"], string>([
    ["name", name],
    ["dependencies", dependencies],
    ["devDependencies", devDependencies],
    ["version", version],
    ["nodeVersion", nodeVersion],
  ]);

  return (
    <Title ref={ref} className="my-8 text-yellow-400">
      {mapVariant.get(variant)}
    </Title>
  );
});
AboutTitle.displayName = "AboutTitle";

type SectionTitleProps = {
  variant: "aboutMe" | "projects" | "experiences";
};

export const SectionTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & SectionTitleProps
>(({ className, children, variant, ...props }, ref) => {
  const {
    home: {
      sections: { aboutMe, experiences, projects },
    },
  } = useTranslationClientTexts();
  const localeText = useTranslations("Home");

  const mapVariant = new Map<SectionTitleProps["variant"], string>([
    ["aboutMe", aboutMe],
    ["experiences", experiences],
    ["projects", projects],
  ]);

  return (
    <>
      <Subtitle ref={ref} className="mb-2">
        {mapVariant.get(variant)}
      </Subtitle>
      {variant === "projects" && (
        <Body>{localeText("sections.projects.description")}</Body>
      )}
    </>
  );
});
SectionTitle.displayName = "SectionTitle";
