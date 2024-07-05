import { Header, Main, Section } from "@/components/ui/page-elements";
import { Metadata } from "next";
import projectPackage from '../../../package.json'

export const metadata: Metadata = {
    title: "Portfolio - Hiago/About",
    description: "Next + Tailwind + ShadCn",
  };

  export default async function About() {
    return(
      <>
        <Header goBack />
        <Main>
          <Section id="about">
            <pre>{JSON.stringify(projectPackage, null, 2)}</pre>
          </Section>
        </Main>
        </>
    )
  }