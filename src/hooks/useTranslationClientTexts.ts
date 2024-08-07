"use client";

import { useTranslations } from "next-intl";

export default function useTranslationClientTexts() {

  const homeTranslationTexts = useTranslations("Home");
  const aboutTranslationTexts = useTranslations("About");

  return {
    home: {
      sections: {
        projects: homeTranslationTexts("sections.projects.name"),
        experiences: homeTranslationTexts("sections.experiences.name"),
        aboutMe: homeTranslationTexts("sections.aboutMe.name")
      }
    },
    about: {
      name: aboutTranslationTexts("name"),
      version: aboutTranslationTexts("version"),
      nodeVersion: aboutTranslationTexts("nodeVersion"),
      dependencies: aboutTranslationTexts("dependencies"),
      devDependencies: aboutTranslationTexts("devDependencies"),
    },
  };
}
