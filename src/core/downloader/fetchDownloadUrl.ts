const apiUrl =
    "https://api.opensubtitles.com/api/v1/download";


    const fetchDownloadUrl = async (fileId: number): Promise<string | null> => {
    const payload = {
        "file_id": fileId
    }

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "API-Key": "TGFH3Kfz1S7ZJFckfWkZuiMTXljUPzBU",
            "User-Agent": "Tafsiri V1",
            'Content-Type': 'application/json',
            "Accept": 'application/json',
        },    
        body: JSON.stringify(payload),
    });

    try {
        const jsonResponse = await response.json();
        return  jsonResponse.link
    } catch(error) {
        return null
    };

    
}

export default fetchDownloadUrl;
