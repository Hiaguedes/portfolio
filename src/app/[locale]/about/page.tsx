import { Header, Main, Section } from "@/components/ui/page-elements";
import { Metadata } from "next";
import projectPackage from "../../../../package.json";
import { Title } from "@/components/ui/typography";
import { AboutTitle } from "@/components/ui/get-locale-components";

export const metadata: Metadata = {
  title: "Portfolio - Hiago/About",
  description: "Next + Tailwind + ShadCn",
};

export default async function About() {
  const prettifyJson = (data: JSON | object) => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <>
      <Header goBack />
      <Main>
        <Section id="about">
          <AboutTitle variant="name" />
          <p>{projectPackage.name}</p>

          <AboutTitle variant="version" />
          <p>{projectPackage.version}</p>

          <AboutTitle variant="nodeVersion" />
          <p>{projectPackage.engines.node}</p>

          <AboutTitle variant="dependencies" />
          <pre>{prettifyJson(projectPackage.dependencies)}</pre>

          <AboutTitle variant="devDependencies" />
          <pre>{prettifyJson(projectPackage.devDependencies)}</pre>
        </Section>
      </Main>
    </>
  );
}
