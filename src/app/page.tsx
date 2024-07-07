import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { LucideGithub, LucideInstagram, LucideLinkedin, LucideMail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import personalInfo from "hiaguedes/info.json";
import { SocialCard } from "@/components/ui/social-cards";

import Blob from "@/components/ui/blob";
import PortfolioCard from "@/components/PortfolioCard";
import { format } from "date-fns";
import { getRepos } from "@/helpers/repo/getRepos";
import { Header, Main, Section, Footer } from "@/components/ui/page-elements";
import { Body, Subtitle, Title } from "@/components/ui/typography";
import { TechVariants } from "@/components/ui/portfolio-card";
import { ReposApiResponse } from "@/infra/Repos/reposApiResponse";
import { Repos } from "@/helpers/repo/enum";
import Link from "next/link";
import { SectionsIdsEnum } from "@/helpers/SectionsIdEnum";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/Home",
  description: "Next + Tailwind + ShadCn",
};
const formatDate = (date: Date | undefined) =>
  date ? format(date, "dd/MM/yyyy") : "";

type IdRepo = { id: number; techsUsed: TechVariants[]; src: string };

const PortfolioCardBuilder = ({
  repos,
  data,
}: {
  repos: IdRepo[];
  data: ReposApiResponse[];
}) => {
  const components = repos.map((repo) => {
    const locatedRepo = data.find((dataRepo) => dataRepo.id === repo.id);
    if (!locatedRepo) return null;

    return (
      <PortfolioCard
        techsUsed={repo.techsUsed}
        key={locatedRepo.id}
        title={locatedRepo.name ?? ""}
        src={repo.src}
        alt={`Imagem do repositorio ${locatedRepo.name}`}
        updatedAt={formatDate(locatedRepo.updated_at) ?? ""}
        link={locatedRepo.html_url}
        homepage={locatedRepo.homepage}
      />
    );
  });
  return <>{...components}</>;
};

export default async function Home() {
  const data = await getRepos();
  // console.log(data)

  const ProjectsIds: IdRepo[] = [
    {
      id: Repos.Id.HIAGUEDES,
      techsUsed: ["npm", "gh-actions", "typescript"],
      src: Repos.Assets.HIAGUEDES,
    },
    {
      id: Repos.Id.IP_TRACK,
      techsUsed: ["javascript", "css", "html"],
      src: Repos.Assets.IP_TRACK,
    },
    {
      id: Repos.Id.LINK_AGREGATOR,
      techsUsed: ["react", "styled-components", "typescript"],
      src: Repos.Assets.LINK_AGREGATOR,
    },
    {
      id: Repos.Id.QUIZ_WEB,
      techsUsed: ["next", "javascript"],
      src: Repos.Assets.QUIZ_WEB,
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <Section
          id={SectionsIdsEnum.MAIN}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="max-w-xl flex flex-col gap-4">
            <Title className="text-center text-6xl ">
              Hiaguedes
            </Title>
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

        <Section id={SectionsIdsEnum.PROJECTS}>
          <Subtitle className="mb-2">Projetos</Subtitle>
          <Body>
            Projetos de front-end, projetos de back-end, projetos inacabados
          </Body>

          <div className="my-6 flex flex-row gap-12 flex-wrap items-center">
            <PortfolioCardBuilder repos={ProjectsIds} data={data} />
          </div>
        </Section>
        <Section id={SectionsIdsEnum.BLOG}>
          <Subtitle className="mb-2">Blog</Subtitle>
          <Body>O que ando escrevendo</Body>
        </Section>
        <Footer className="" />
      </Main>
    </>
  );
}
