import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { LucideAlarmClock, LucideGithub, LucideInstagram, LucideMail, LucideMenu } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import personalInfo from 'hiaguedes/info.json'
import { SocialCard } from "@/components/ui/social-cards";
import { Footer } from "@/components/ui/footer";
import { PorfolioCard, PortfolioCardContent, PortfolioCardFooter, PortfolioCardHeader, PortfolioCardTitle } from "@/components/ui/portfolio-card";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/Home",
  description: "Next + Tailwind + ShadCn",
};

const linkCurriculum = "https://goldenrod-ocelot-343.notion.site/Hiago-Guedes-Curriculum-729abc1fc9ae4876a06897ce7b4d2469"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-12 gap-3">
        <header className="absolute flex justify-between flex-row top-0 w-full h-16 border-b-2 border-yellow-300 p-4">
          <LucideMenu  className="cursor-pointer" />
          <div>
            <Button>
              <Link href={linkCurriculum} target="__blank">
                Baixar Curriculo
              </Link>
            </Button>
          </div>
        </header>
        <section id="main" className="flex flex-row justify-center items-center gap-32 h-dvh">
          <div className="">
            <h2 className="mb-8 text-4xl">Meu nome e <h2 className="text-yellow-400 inline-flex">Hiago Guedes</h2>, ou apenas <h2 className="text-yellow-400 inline-flex">Hiaguedes</h2></h2>
            <h4 className="text-gray-500">Desenvolvedor Front end </h4>
          </div>
          <HoverCard>
          <HoverCardTrigger>
          <Image
            className="cursor-pointer"
            src="/assets/avatar.png"
            alt="Avatar Author"
            width={300}
            height={300}
          />
          </HoverCardTrigger>
          <HoverCardContent>
            <Card className="h-30 p-4 flex flex-row m-4 gap-2">
              <Button className="w-12 h-12 rounded-full"><LucideAlarmClock /></Button>
              <Button className="w-12 h-12 rounded-full"><LucideAlarmClock /></Button>
              <Button className="w-12 h-12 rounded-full"><LucideAlarmClock /></Button>
              <Button className="w-12 h-12 rounded-full"><LucideAlarmClock /></Button>
              <Button className="w-12 h-12 rounded-full"><LucideAlarmClock /></Button>
            </Card>
          </HoverCardContent>
          </HoverCard>
        </section>
        <section className="w-full flex flex-col" id="contacts">
          <h2 className="text-xl mb-6">Contatos</h2>
          <div className="flex flex-row gap-12 w-full items-center justify-center">
            <SocialCard 
              icon={<LucideInstagram />}
              name="Instagram"
              link={personalInfo.socials.personal.instagram}
              userName="@hiago.guedes"
            />
            <SocialCard 
              icon={<LucideGithub  />}
              name="Github"
              link={personalInfo.socials.professional.github}
              userName="hiaguedes"
            />
            <SocialCard 
              icon={<LucideMail  />}
              name="Email"
              link={"mailto:" + personalInfo.socials.professional.email}
              userName="hiagorguedes"
            />

          </div>
        </section>
        <section className="w-full flex flex-col" id="projects">
          <h2 className="text-xl mb-2">Projetos</h2>
          <p className="text-gray-500">Projetos de front-end, projetos de back-end, projetos inacabados</p>
          <div className="my-6 flex flex-row gap-8 flex-wrap">
            <PorfolioCard>
              <PortfolioCardHeader>
                <PortfolioCardTitle>link agregator</PortfolioCardTitle>

              </PortfolioCardHeader>
              <PortfolioCardContent>
                content
              </PortfolioCardContent>
              <PortfolioCardFooter>
              footer
              </PortfolioCardFooter>
            </PorfolioCard>

            

          </div>

        </section>
        <section className="w-full flex flex-col" id="blog">
          <h2 className="text-xl mb-2">Blog</h2>
          <p className="text-gray-500">O que ando escrevendo</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
