import { Header, Main, Section } from "@/components/ui/page-elements";
import { Metadata } from "next";
import projectPackage from '../../../package.json'
import { Title } from "@/components/ui/typography";

export const metadata: Metadata = {
    title: "Portfolio - Hiago/About",
    description: "Next + Tailwind + ShadCn",
  };

  export default async function About() {

    const prettifyJson = (data: JSON | object) => {
      return JSON.stringify(data, null, 2)
    }

    return(
      <>
        <Header goBack />
        <Main>
          <Section id="about">
          <Title className="my-8 text-yellow-400">Nome do projeto</Title>
          <p>{projectPackage.name}</p>
            <Title className="my-8 text-yellow-400">Versão</Title>
            <p>{projectPackage.version}</p>

            <Title className="my-8 text-yellow-400">Versão do node</Title>
            <p>{projectPackage.engines.node}</p>

            <Title className="my-8 text-yellow-400">Dependências</Title>
            <pre>{prettifyJson(projectPackage.dependencies)}</pre>

            <Title className="my-8 text-yellow-400">Dependências de desenvolvimento</Title>
            <pre>{prettifyJson(projectPackage.devDependencies)}</pre>
          </Section>
        </Main>
        </>
    )
  }