import { Button, Grid, Stack } from "@mui/material";
import "./Footer.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Stack direction="column">
            <Stack className="footer" direction="column" spacing={4}>
                <Stack direction="row" spacing={2}>
                    <span className="simplified">Subtitles Simplified.</span>{" "}
                    Download, Watch, Repeat!
                </Stack>
                <Button
                    href="/search"
                    className="tryButton"
                    variant="contained"
                    sx={{background: 'rgba(139, 109, 237)'}}
                >
                    {" "}
                    Try Tafsiri
                </Button>
            </Stack>

            <Grid
                container
                sx={{
                    background: "#090a0a",
                }}
            >
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Stack direction="row" spacing={1} className="footerLogo">
                        <SubtitlesIcon className="logoImage" />
                        <h3>tafsiri</h3>
                        <Button
                            href="https://github.com/the-krafty-koder/tafsiri"
                            className="githubButton"
                            startIcon={
                                <GitHubIcon
                                    className="githubIcon"
                                    fontSize="small"
                                />
                            }
                            color="inherit"
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Footer;
