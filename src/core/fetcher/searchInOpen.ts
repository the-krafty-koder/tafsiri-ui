import queryString from "query-string";
import { Subtitle } from "../../ui/search/Sub/types";
import { getHeaders } from "../commands";
const apiUrl = "https://api.opensubtitles.com/api/v1/subtitles";

const trimResults = (
    results: { attributes: Record<string, unknown> }[]
): Subtitle[] => {
    return results.map(
        ({ attributes }: { attributes: Record<string, unknown> }) => ({
            title: (attributes?.feature_details as Record<string, unknown>)
                .title as string,
            language: attributes.language as string,
            url: attributes.url as string,
            fileId:
                ((attributes?.files as Record<string, unknown>[])?.[0]
                    .file_id as number) || undefined,
            fromTrusted: attributes.from_trusted as boolean,
            release: attributes.release as string,
            hd: (attributes.hd as boolean) || null,
            imdbId:
                ((attributes?.feature_details as Record<string, unknown>)
                    ?.imdb_id as string) || null,
            imgUrl:
                ((attributes?.related_links as Record<string, unknown>)
                    ?.img_url as string) || null,
        })
    );
};

const searchInOpen = async (parameters: {
    title: string;
    season: number;
    episode: number;
    language: string;
}): Promise<{ data: Subtitle[] }> => {
    const { title, episode, season, language } = parameters;

    const url = queryString.stringifyUrl({
        url: apiUrl,
        query: {
            query: title,
            season_number: season,
            episode_number: episode,
            languages: language,
            page: 1,
            per_page: 10,
        },
    });
    const headers = getHeaders();

    const response = await fetch(url, {
        method: "GET",
        headers: headers,
    });
    const jsonResponse = await response.json();
    const finalData = trimResults(jsonResponse.data || []);

    return {
        data: finalData,
    };
};

export default searchInOpen;
