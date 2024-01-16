import { Grid, Button, Link, Menu, MenuItem, Stack } from "@mui/material";
import "./Navigation.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import GitHubIcon from "@mui/icons-material/GitHub";
import Description from "../description/Description";
import { useState } from "react";

const Navigation = () => {
    return (
        <Grid className="navigation" container spacing={2}>
            <Grid item xs={3}>
                <Stack className="logo" direction="row" spacing={1}>
                    <SubtitlesIcon className="logoImage" />
                    <h3>tafsiri</h3>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack className="links" direction="row" spacing={3}>
                    <Link
                        href="https://github.com/the-krafty-koder/tafsiri"
                        underline="none"
                        color="white"
                    >
                        Documentation
                    </Link>
                    <Link href="#" underline="none" color="white">
                        Demo
                    </Link>

                    <Link href="" underline="none" color="white">
                        Developers
                    </Link>
                </Stack>
            </Grid>

            <Grid item xs={3}>
                <Stack direction="row" spacing={2}>
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
                    >
                        <span className="githubStars">3</span>
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        href="/search"
                        sx={{
                            color: "white",
                            backgroundColor: "rgba(139, 109, 237, .8)",
                            fontFamily: 'Jost'
                        }}
                    >
                        <span>Try Tafsiri</span>
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Navigation;
