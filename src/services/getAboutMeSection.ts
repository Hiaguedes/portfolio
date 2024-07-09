const getAboutMeSection = async () => {
    const { signal } = new AbortController()

    const response = await fetch( process.env.URL + '/api/about-me', { signal });
    const aboutMe = await response.json();

    return aboutMe
}

export default getAboutMeSection;