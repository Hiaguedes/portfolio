import { ExperiencesResult } from "@/app/api/experiences/route";

const getExperiencesSection = async (): Promise<ExperiencesResult[] | null> => {

    const api = `${process.env.URL ?? 'http://localhost:3000'}/api/experiences`;
    const response = await fetch(api, { cache: 'no-cache' });

    if (!response.ok) {
        return null
    }

    return response.json()
}

export default getExperiencesSection;