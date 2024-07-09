import { TechVariants } from "@/components/ui/portfolio-card";
import { Repos } from "./repo/enum";

export type IdRepo = { id: number; techsUsed: TechVariants[]; src: string };
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

  export default ProjectsIds