const getAboutMeSection = async () => {

    const api = `${process.env.URL ?? 'http://localhost:3000'}/api/about-me`;
    const response = await fetch(api, { cache: 'no-cache' });

    if(!response.ok){
        throw new Error('Failed to fetch data');
    }

    return response.json()
}

export default getAboutMeSection;