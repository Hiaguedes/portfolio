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
import { format } from "date-fns";
import { getRepos } from "@/helpers/repo/getRepos";
import { Header, Main, Section, Footer } from "@/components/ui/page-elements";
import { Body, Subtitle, Title } from "@/components/ui/typography";
import { TechVariants } from "@/components/ui/portfolio-card";
import { ReposApiResponse } from "@/infra/Repos/reposApiResponse";
import { Repos } from "@/helpers/repo/enum";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/Home",
  description: "Next + Tailwind + ShadCn",
};
const formatDate = (date: Date | undefined) => date ? format(date, 'dd/MM/yyyy') : ''

type IdRepo = { id: number, techsUsed: TechVariants[], src: string }

const PortfolioCardBuilder = ({repos, data }: { repos: IdRepo[], data: ReposApiResponse[]  }) => {

  const components = repos.map(repo => {
    const locatedRepo = data.find(dataRepo => dataRepo.id === repo.id);
    if(!locatedRepo) return null;

    return (<PortfolioCard
      techsUsed={repo.techsUsed}
      key={locatedRepo.id}
      title={locatedRepo.name ?? ''}
      src={repo.src}
      alt={`Imagem do repositorio ${locatedRepo.name}`}
      updatedAt={formatDate(locatedRepo.updated_at) ?? ''}
      link={locatedRepo.html_url}
    />
    )
  })
  return (<>{...components}</>)
}

export default async function Home() {

  const data = await getRepos();
  // console.log(data)

  const ProjectsIds: IdRepo[] = [
    {
      id: Repos.Id.HIAGUEDES,
      techsUsed: ['npm', 'gh-actions', 'typescript'],
      src: Repos.Assets.HIAGUEDES
  }, {
      id: Repos.Id.IP_TRACK,
      techsUsed: ['javascript', 'css', 'html'],
      src: Repos.Assets.IP_TRACK
  }
];


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
              <PortfolioCardBuilder repos={ProjectsIds} data={data}  />
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