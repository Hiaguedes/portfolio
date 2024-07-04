import { ReposApiResponse } from "@/infra/Repos/reposApiResponse";

export async function getRepos(): Promise<ReposApiResponse[]> {
    const res = await fetch('https://api.github.com/users/Hiaguedes/repos?type=public&per_page=100'); // Substitua pelo seu link público
    const data: ReposApiResponse[] = await res.json();
  
    return data
  }