import { Header, Main, Section } from "@/components/ui/page-elements";
import { Metadata } from "next";
import projectPackage from '../../../package.json'

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
          <h2 className="my-8 text-4xl text-yellow-400">Nome do projeto</h2>
          <p>{projectPackage.name}</p>
            <h2 className="my-8 text-4xl text-yellow-400">Versao</h2>
            <p>{projectPackage.version}</p>

            <h2 className="my-8 text-4xl text-yellow-400">Dependencias</h2>
            <pre>{prettifyJson(projectPackage.dependencies)}</pre>

            <h2 className="my-8 text-4xl text-yellow-400">Dependencias de desenvolvimento</h2>
            <pre>{prettifyJson(projectPackage.devDependencies)}</pre>
          </Section>
        </Main>
        </>
    )
  }