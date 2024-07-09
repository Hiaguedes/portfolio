const getAboutMeSection = async () => {
    const { signal } = new AbortController()

    const api = `${process.env.URL ?? 'http://localhost:3000'}/api/about-me`;
    const response = await fetch(api, { signal });
    const aboutMe = await response.json();

    return aboutMe
}

export default getAboutMeSection;