const login = async () => {
    const url = "https://api.opensubtitles.com/api/v1/login";
    const apiKey = process.env.REACT_APP_OPEN_SUBTITLES_API_KEY!;
    const apiUsername  =  process.env.REACT_APP_OPEN_SUBTITLES_API_USERNAME;
    const apiPassword  = process.env.REACT_APP_OPEN_SUBTITLES_API_PASSWORD!;
    
    const payload = {
        username: apiUsername,
        password: apiPassword
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "Tafsiri V1",
            "Accept": "application/json",
            "Api-Key": `${apiKey}`,
        },
        body: JSON.stringify(payload),
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.token
    } catch {
        return null
    }
};

export default login;
