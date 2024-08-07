
type AboutMeParams = {
    locale: 'pt-BR' | 'en-US'
}

const getAboutMeSection = async ({ locale }: AboutMeParams) => {

    const localeRoute = locale === 'pt-BR' ? '/api/about-me' : '/api/about-me/en-US'

    const api = `${process.env.URL ?? 'http://localhost:3000'}${localeRoute}`;
    const response = await fetch(api, { cache: 'no-cache' });

    if (!response.ok) {
        return ''
    }

    return response.json()
}

export default getAboutMeSection;