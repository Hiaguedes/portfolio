import { IdRepo } from "@/helpers/ProjectsIds";
import PortfolioCard from "../PortfolioCard";
import { ReposApiResponse } from "@/infra/Repos/reposApiResponse";
import { format } from "date-fns";

const formatDate = (date: Date | undefined) =>
  date ? format(date, "dd/MM/yyyy") : "";

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

export default PortfolioCardBuilder;
