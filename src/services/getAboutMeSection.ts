const getAboutMeSection = async () => {

    const api = `${process.env.URL ?? 'http://localhost:3000'}/api/about-me`;
    const response = await fetch(api, { cache: 'no-cache' });

    return response.json()
}

export default getAboutMeSection;