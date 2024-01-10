import { Button, Stack } from "@mui/material";
import "./Description.css";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const Description = () => {
    return (
        <Stack className="wrapper" direction="column">
            <Stack direction="column" spacing={1}>
                <h1 className="headline">Subtitles Made Simple</h1>
                <h1 className="tag">Enhance Every Watch</h1>
            </Stack>

            <div className="description">
                Tafsiri is an open source tool <br /> that lets you download
                subtitles for your favourite shows/movies from the command-line
                in multiple languages
            </div>
            <Stack className="buttons" direction="row" spacing={2}>
                <Button
                    variant="contained"
                    sx={{
                        fontFamily: "Jost",
                        backgroundColor: "rgba(139, 109, 237, .8)",
                    }}
                >
                    Demo
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ImportContactsIcon />}
                    sx={{ fontFamily: "Jost", backgroundColor: "#212526" }}
                >
                    Documentation
                </Button>
            </Stack>
        </Stack>
    );
};

export default Description;
