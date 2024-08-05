import { ReposApiResponse } from "@/infra/Repos/reposApiResponse";
import { Github } from "../github/essentials";

export async function getRepos(): Promise<ReposApiResponse[]> {
  const res = await fetch(`${Github.API}/users/${Github.OWNER}/repos?type=public&per_page=100`);
  const data: ReposApiResponse[] = await res.json();

  return data
}