import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import {
  LucideGithub,
  LucideInstagram,
  LucideMail,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import personalInfo from "hiaguedes/info.json";
import { SocialCard } from "@/components/ui/social-cards";

import Blob from "@/components/ui/blob";
import PortfolioCard from "@/components/PortfolioCard";
import { ReposId } from "@/helpers/repo/reposIdMap";
import { format } from "date-fns";
import { getRepos } from "@/helpers/repo/getRepos";
import { Github } from "@/helpers/github/essentials";
import { Header, Main, Section, Footer } from "@/components/ui/page-elements";
import { Body, Subtitle, Title } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/Home",
  description: "Next + Tailwind + ShadCn",
};

export default async function Home() {

  const data = await getRepos();
  // console.log(data)
  const formatDate = (date: Date | undefined) => date ? format(date, 'dd/MM/yyyy') : ''

  return (
    <>
      <Header />
      <Main>
        <Section id="main" className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen">
            <div className="max-w-xl">
            <Title className="mb-8 lg:text-left text-center">
              Meu nome é <span className="text-yellow-400 inline-flex">Hiago Guedes</span>, ou apenas <span className="text-yellow-400 inline-flex">Hiaguedes</span>
            </Title>
            <Body>Desenvolvedor Front end</Body>
            </div>
          <HoverCard>
            <HoverCardTrigger>
              <div className="relative flex items-center justify-center">
                <Image
                  className="z-10 cursor-pointer absolute"
                  src="/assets/avatar.png"
                  alt="Avatar Author"
                  width={300}
                  height={300}
                />
                <Blob />
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <Card className="h-30 p-4 flex flex-row m-4 gap-2">
                <p>Ola!</p>
              </Card>
            </HoverCardContent>
          </HoverCard>
        </Section>
        <Section id="contacts">
          <Subtitle className="mb-6">Contatos</Subtitle>
          <div className="flex gap-12 w-full items-center justify-center sm:flex-row flex-col">
            <SocialCard
              icon={<LucideInstagram />}
              name="Instagram"
              link={personalInfo.socials.personal.instagram}
              userName="@hiago.guedes"
            />
            <SocialCard
              icon={<LucideGithub />}
              name="Github"
              link={personalInfo.socials.professional.github}
              userName="hiaguedes"
            />
            <SocialCard
              icon={<LucideMail />}
              name="Email"
              link={"mailto:" + personalInfo.socials.professional.email}
              userName="hiagorguedes"
            />
          </div>
        </Section>
        <Section id="projects">
          <Subtitle className="mb-2">Projetos</Subtitle>
          <Body>
            Projetos de front-end, projetos de back-end, projetos inacabados
          </Body>

          <div className="my-6 flex flex-row gap-12 flex-wrap">
            <PortfolioCard 
            key={ReposId.HIAGUEDES}
            title={data.find(repo => repo.id === ReposId.HIAGUEDES)?.name ?? ''}
            src={`${Github.ASSETS_URL}/${Github.OWNER}/Hiaguedes/${Github.MainBranches.MAIN}/assets/preview-hiaguedes.png`}
            alt={`Imagem do repositorio ${data.find(repo => repo.id === ReposId.HIAGUEDES)?.name}`}
            techsUsed={['npm', 'gh-actions', 'typescript']}
            updatedAt={formatDate(data.find(repo => repo.id === ReposId.HIAGUEDES)?.updated_at) ?? ''}
            link={data.find(repo => repo.id === ReposId.HIAGUEDES)?.html_url}
           /> 
            <PortfolioCard 
            key={ReposId.IP_TRACK}
            title={data.find(repo => repo.id === ReposId.IP_TRACK)?.name ?? ''}
            src={`${Github.ASSETS_URL}/${Github.OWNER}/ip-address-tracker-master/${Github.MainBranches.MASTER}/design/desktop-preview.jpg`}
            alt={`Imagem do repositorio ${data.find(repo => repo.id === ReposId.IP_TRACK)?.name}`}
            techsUsed={['javascript' ,'css', 'html']}
            updatedAt={formatDate(data.find(repo => repo.id === ReposId.IP_TRACK)?.updated_at) ?? ''}
            link={data.find(repo => repo.id === ReposId.IP_TRACK)?.html_url}
           /> 
          </div>
        </Section>
        <Section id="blog">
          <Subtitle className="mb-2">Blog</Subtitle>
          <Body>O que ando escrevendo</Body>
        </Section>
      <Footer className="" />
      </Main>
    </>
  );
}