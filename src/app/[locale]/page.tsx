import {
  LucideGithub,
  LucideInstagram,
  LucideLinkedin,
  LucideMail,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import personalInfo from "hiaguedes/info.json";

import { getRepos } from "@/helpers/repo/getRepos";
import { Header, Main, Section, Footer } from "@/components/ui/page-elements";
import { Body, Subtitle } from "@/components/ui/typography";
import Link from "next/link";
import { SectionsIdsEnum } from "@/helpers/SectionsIdEnum";
import HoverTextTitle from "@/components/ui/hover-title-text";
import ProjectsIds from "@/helpers/ProjectsIds";
import PortfolioCardBuilder from "@/components/ui/PortfolioCardBuilder";
import getAboutMeSection from "@/services/getAboutMeSection";
import getExperiencesSection from "@/services/getExperiencesSection";
import { Icons } from "@/components/ui/portfolio-card";
import { useTranslations } from "next-intl";
import { RoleText } from "@/components/ui/get-locale-components";

export const metadata: Metadata = {
  authors: {
    name: "Hiago Guedes",
    url: "https://github.com/Hiaguedes",
  },
  title: "Portfolio - Hiago/Home",
  description: "Project Made With Next.js, Tailwind and shadcn",
  keywords: [
    "hiaguedes",
    "Hiago Riba Guedes",
    "portfolio",
    "frontend",
    "hiago guedes",
    "freelancer",
    "website",
    "freela",
    "sites",
    "front-end",
    "developer",
    "Hiago Guedes",
    "Software Engineer",
  ],
  openGraph: {
    title: "Portfolio - Hiago/Home",
    description: "Project Made With Next.js, Tailwind and shadcn",
    images: {
      url: "assets/preview.png",
    },
  },
};

export default async function Home() {
  const data = await getRepos();
  const aboutMe = await getAboutMeSection();
  const experiences = await getExperiencesSection();

  return (
    <>
      <Header />
      <Main>
        <Section
          id={SectionsIdsEnum.MAIN}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="max-w-xl flex flex-col gap-4">
            <HoverTextTitle text={"Hiaguedes"} />
            <RoleText />
          </div>
          <div className="flex flex-row gap-12 items-center mt-20">
            <Link
              className="hover:text-yellow-400 group-hover:scale-125:delay-0 transition-all ease-linear animate-scale-up delay-100"
              target="__blank"
              href={"mailto:" + personalInfo.socials.professional.email}
            >
              <LucideMail size={30} />
            </Link>
            <Link
              className="hover:text-yellow-400 animate-scale-up delay-150 hover:paused group-hover:scale-125:delay-0"
              target="__blank"
              href={personalInfo.socials.professional.linkedin}
            >
              <LucideLinkedin size={30} />
            </Link>
            <Link
              className="hover:text-yellow-400 group-hover:scale-125:delay-0 transition-all ease-linear animate-scale-up delay-200"
              target="__blank"
              href={personalInfo.socials.personal.instagram}
            >
              <LucideInstagram size={30} />
            </Link>
            <Link
              className="hover:text-yellow-400 group-hover:scale-125:delay-0 transition-all ease-linear animate-scale-up delay-300"
              target="__blank"
              href={personalInfo.socials.professional.github}
            >
              <LucideGithub size={30} />
            </Link>
          </div>
        </Section>

        <Section id={SectionsIdsEnum.ABOUT_ME}>
          <Subtitle className="mb-2">Sobre mim</Subtitle>
          <div className="flex lg:flex-row flex-col gap-16 mt-8 h-full lg:mx-0 items-center ">
            <Image
              src={personalInfo.avatar}
              unoptimized
              width={300}
              height={300}
              alt="Avatar Hiago Guedes - Software Engineer"
            />
            <p className="max-w-96 lg:text-left text-center">
              {aboutMe ? aboutMe?.paragraph.rich_text[0].text.content : ""}
            </p>
          </div>
        </Section>
        <Section id={SectionsIdsEnum.EXPERIENCES}>
          <Subtitle className="mb-2">Experiências</Subtitle>

          <div className="my-4">
            <>
              {experiences &&
                experiences.map((experience, id) => (
                  <div
                    key={id}
                    className="flex lg:flex-row flex-col lg:gap-20 gap-8"
                  >
                    <Body className="text-yellow-400">
                      <Link href={experience.company.href!}>
                        {experience.company.plain_text}
                      </Link>
                    </Body>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row justify-between">
                        <p>{experience.role.plain_text}</p>
                        <Body>{experience.period}</Body>
                      </div>
                      <p className="max-w-2xl">
                        {experience.resume.text.content}
                      </p>
                      <p>Tecnologias usadas</p>
                      <div className="flex flex-row gap-2">
                        {experience.skills.map((skill) =>
                          Icons.get(skill.name)
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </>
          </div>
        </Section>
        <Section id={SectionsIdsEnum.PROJECTS}>
          <Subtitle className="mb-2">Projetos</Subtitle>
          <Body>
            Projetos de front-end, projetos de back-end, projetos inacabados
          </Body>

          <div className="my-6 flex flex-row gap-12 flex-wrap items-center">
            <PortfolioCardBuilder repos={ProjectsIds} data={data} />
          </div>
        </Section>
        <Footer className="" />
      </Main>
    </>
  );
}
