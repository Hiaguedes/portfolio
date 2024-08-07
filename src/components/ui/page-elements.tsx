"use client";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Button } from "./button";
import { LucideChevronLeft, LucideMenu } from "lucide-react";
import personalInfo from "hiaguedes/info.json";
import { useParams, useRouter } from "next/navigation";
import { LinkText } from "./typography";
import { SectionsIdsEnum } from "@/helpers/SectionsIdEnum";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { useTranslations } from "next-intl";
import useTranslationClientTexts from "@/hooks/useTranslationClientTexts";

export const Main = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(className, "flex-1 overflow-y-auto")}
      {...props}
    >
      {children}
    </main>
  );
});
Main.displayName = "Main";

export const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    id: string;
  }
>(({ className, children, id, ...props }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(className, "w-full flex flex-col px-12 py-5")}
      {...props}
    >
      {children}
    </section>
  );
});
Section.displayName = "Section";

type HeaderProps = {
  goBack?: boolean;
};
export const Header: FC<HeaderProps> = ({ goBack }) => {
  const { back } = useRouter();

  const handleScrollTo = (id: SectionsIdsEnum) => {
    const targetElement = document.getElementById(id);

    if (targetElement) targetElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadClickButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await fetch(`/api/pdf`);

    const content = (await response.json()) as any;
    const pdfUrl = content?.file.file.url;
    const pdfName = content?.file.name;

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = pdfName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
  };

  const {
    home: {
      sections: { aboutMe, experiences, projects },
    },
  } = useTranslationClientTexts();
  const localeText = useTranslations("Home");

  return (
    <header className="flex justify-between items-center flex-row w-full border-b-2 border-yellow-300 p-5 h-auto sticky top-0 z-10">
      <div className="flex flex-row gap-2">
        {goBack && (
          <LucideChevronLeft className="cursor-pointer" onClick={back} />
        )}
        <HoverCard openDelay={0}>
          <HoverCardTrigger>
            <LucideMenu className="xs:block hidden" />
          </HoverCardTrigger>
          <HoverCardContent align="center" side="right">
            <div className="flex flex-row p-0  ml-4">
              <>
                <Button
                  variant="ghost"
                  onClick={() => handleScrollTo(SectionsIdsEnum.MAIN)}
                >
                  Main
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleScrollTo(SectionsIdsEnum.ABOUT_ME)}
                >
                  {aboutMe}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleScrollTo(SectionsIdsEnum.EXPERIENCES)}
                >
                  {experiences}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleScrollTo(SectionsIdsEnum.PROJECTS)}
                >
                  {projects}
                </Button>
              </>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div>
        <Button onClick={(e) => handleDownloadClickButton(e)}>
          {localeText("header.downloadButton")}
        </Button>
      </div>
    </header>
  );
};
Header.displayName = "Header";

export const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const localeText = useTranslations("Home");
  const { locale } = useParams<{ locale: "pt-BR" | "en-US" }>();

  return (
    <footer
      ref={ref}
      className={cn("w-full px-12 py-8 bg-zinc-800 m-0 mt-4", className)}
      {...props}
    >
      <p>
        {localeText("footer.intro")} {personalInfo.name},{" "}
        <LinkText variant="emphasis" href={`/${locale}/about`}>
          {localeText("footer.link")}
        </LinkText>{" "}
        {localeText("footer.knowMore")}
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";
