import Sub from "../Sub/Sub";
import { Subtitle } from "../Sub/types";

interface Props {
    subtitles: Subtitle[];
}

const SubsList = ({ subtitles }: Props) => {
    console.log(subtitles)
    return (
        <>
            {subtitles.map((sub: Subtitle) => (
                <Sub
                    key={sub.fileId}
                    title={sub.title}
                    fileId={sub.fileId}
                    language={sub.language}
                    hd={sub?.hd}
                    fromTrusted={sub?.fromTrusted}
                    release={sub?.release}
                    imdbId={sub?.imdbId}
                    imgUrl={sub?.imgUrl}
                />
            ))}
        </>
    );
};

export default SubsList;
