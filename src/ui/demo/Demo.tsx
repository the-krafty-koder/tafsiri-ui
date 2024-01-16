import { Box, Stack, Typography } from "@mui/material";
import "./Demo.css";
import tafsiriGif from "../../assets/tafsiri.gif";

const Demo = () => {
    return (
        <Stack className="container" direction="column" spacing={10}>
            <h2> Fetch your subtitles directly from the CLI</h2>
            <Stack direction="row" spacing={5}>
                <Box>
                    <img alt='tafsiri.gif' src={tafsiriGif} />
                </Box>
                <Stack className="demoText" direction="column" spacing={3}>
                    <div className='borderLineTop'></div>
                    <Typography sx={{ fontSize: '20px', fontFamily: "Jost" }}>
                        Download subtitles for your favourite movies and shows,
                        in a matter of seconds. <br/>

                        With support of over 20 languages, youll be sure to find
                        what youre looking for.
                    </Typography>
                    <div className='borderLineBottom'></div>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Demo;
