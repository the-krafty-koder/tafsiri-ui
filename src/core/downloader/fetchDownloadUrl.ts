import { getHeaders } from "../commands";

const apiUrl = "https://api.opensubtitles.com/api/v1/download";

const fetchDownloadUrl = async (fileId: number): Promise<string | null> => {
    const payload = {
        file_id: fileId,
    };
    const headers = getHeaders();
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
    });

    try {
        const jsonResponse = await response.json();
        return jsonResponse.link;
    } catch (error) {
        return null;
    }
};

export default fetchDownloadUrl;
