import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import {
  LucideAlarmClock,
  LucideGithub,
  LucideInstagram,
  LucideMail,
  LucideMenu,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import personalInfo from "hiaguedes/info.json";
import { SocialCard } from "@/components/ui/social-cards";
import { Footer } from "@/components/ui/footer";
import {
  PorfolioCard,
  PortfolioCardContent,
  PortfolioCardFooter,
  PortfolioCardHeader,
  PortfolioCardTitle,
} from "@/components/ui/portfolio-card";
import Blob from "@/components/ui/blob";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/Home",
  description: "Next + Tailwind + ShadCn",
};

const linkCurriculum =
  "https://goldenrod-ocelot-343.notion.site/Hiago-Guedes-Curriculum-729abc1fc9ae4876a06897ce7b4d2469";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center flex-row w-full border-b-2 border-yellow-300 p-5 h-auto sticky top-0 z-10">
        <LucideMenu className="cursor-pointer" />
        <div>
          <Button>
            <Link href={linkCurriculum} target="__blank">
              Baixar Curriculo
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <section id="main" className="flex flex-row px-12 justify-center items-center w-full gap-32 h-auto min-h-screen">
            <div className="max-w-xl">
            <h2 className="mb-8 text-4xl">
              Meu nome é <span className="text-yellow-400 inline-flex">Hiago Guedes</span>, ou apenas <span className="text-yellow-400 inline-flex">Hiaguedes</span>
            </h2>
            <h4 className="text-gray-500">Desenvolvedor Front end</h4>
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
                {[...Array(5)].map((_, index) => (
                  <Button key={index} className="w-12 h-12 rounded-full">
                    <LucideAlarmClock />
                  </Button>
                ))}
              </Card>
            </HoverCardContent>
          </HoverCard>
        </section>
        <section className="w-full flex flex-col px-12" id="contacts">
          <h2 className="text-xl mb-6">Contatos</h2>
          <div className="flex flex-row gap-12 w-full items-center justify-center">
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
        </section>
        <section className="w-full flex flex-col px-12" id="projects">
          <h2 className="text-xl mb-2">Projetos</h2>
          <p className="text-gray-500">
            Projetos de front-end, projetos de back-end, projetos inacabados
          </p>
          <div className="my-6 flex flex-row gap-8 flex-wrap">
            <PorfolioCard>
              <PortfolioCardHeader>
                <PortfolioCardTitle>link agregator</PortfolioCardTitle>
              </PortfolioCardHeader>
              <PortfolioCardContent>content</PortfolioCardContent>
              <PortfolioCardFooter>footer</PortfolioCardFooter>
            </PorfolioCard>
          </div>
        </section>
        <section className="w-full flex flex-col px-12" id="blog">
          <h2 className="text-xl mb-2">Blog</h2>
          <p className="text-gray-500">O que ando escrevendo</p>
        </section>
      <Footer className="" />
      </main>
    </>
  );
}