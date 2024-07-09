import { LucideGithub, LucideInstagram, LucideLinkedin, LucideMail } from "lucide-react";
import { Metadata } from "next";
import personalInfo from "hiaguedes/info.json";

import { getRepos } from "@/helpers/repo/getRepos";
import { Header, Main, Section, Footer } from "@/components/ui/page-elements";
import { Body, Subtitle } from "@/components/ui/typography";
import Link from "next/link";
import { SectionsIdsEnum } from "@/helpers/SectionsIdEnum";
import HoverTextTitle from "@/components/ui/hover-title-text";
import getAboutMeSection from "@/services/getAboutMeSection";
import ProjectsIds from "@/helpers/ProjectsIds";
import PortfolioCardBuilder from "@/components/ui/PortfolioCardBuilder";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/Home",
  description: "Project Made With Next, Tailwind and ShadCn",
};

export default async function Home() {
  const data = await getRepos();
  const aboutMe = await getAboutMeSection();

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
            <Body className="text-center">Desenvolvedor Front End</Body>
          </div>
          <div className="flex flex-row gap-12 items-center mt-20">
          <Link className="hover:text-yellow-400 hover:scale-125 transition-all ease-linear" target="__blank" href={"mailto:" + personalInfo.socials.professional.email}>
            <LucideMail size={30} />
          </Link>
          <Link className="hover:text-yellow-400 hover:scale-125 transition-all ease-linear" target="__blank" href={personalInfo.socials.professional.linkedin}>
            <LucideLinkedin size={30} />
          </Link>
          <Link className="hover:text-yellow-400 hover:scale-125 transition-all ease-linear" target="__blank" href={personalInfo.socials.personal.instagram}>
          <LucideInstagram size={30} />
          </Link>
          <Link className="hover:text-yellow-400 hover:scale-125 transition-all ease-linear" target="__blank" href={personalInfo.socials.professional.github}>
          <LucideGithub size={30} />
          </Link>
          </div>
        </Section>

        <Section id={SectionsIdsEnum.ABOUT_ME}>
        <Subtitle className="mb-2">Sobre mim</Subtitle>
          <p>{aboutMe?.paragraph.rich_text[0].text.content ?? ''}</p>
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
