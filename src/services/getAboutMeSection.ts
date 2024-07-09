const getAboutMeSection = async () => {

    const api = `${process.env.URL ?? 'http://localhost:3000'}/api/about-me`;
    const response = await fetch(api, { cache: 'no-cache' });
    const aboutMe = await response.json();

    return aboutMe
}

export default getAboutMeSection;