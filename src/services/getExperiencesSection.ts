import { ExperiencesResult } from "@/app/api/experiences/route";

type GetExperiencesParams = {
    locale: 'pt-BR' | 'en-US'
}

const getExperiencesSection = async ({ locale }: GetExperiencesParams): Promise<ExperiencesResult[] | null> => {

    const route = locale === 'pt-BR' ? '/api/experiences' : '/api/experiences/en-US'
    const api = `${process.env.URL ?? 'http://localhost:3000'}${route}`;
    const response = await fetch(api, { cache: 'no-cache' });

    if (!response.ok) {
        return null
    }

    return response.json()
}

export default getExperiencesSection;