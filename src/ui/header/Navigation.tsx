import { Grid, Button, Link, Menu, MenuItem, Stack } from "@mui/material";
import "./Navigation.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openProductMenu = Boolean(anchorEl);
    return (
        <Grid className="navigation" container spacing={2}>
            <Grid item xs={3}>
                <Stack className="logo" direction="row" spacing={1}>
                    <SubtitlesIcon className="logoImage" />
                    <h3>
                        <Link
                            href="/"
                            sx={{ textDecoration: "none", color: "#8b6ded" }}
                        >
                            Sytch
                        </Link>
                    </h3>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack className="links" direction="row" spacing={3}>
                    <Link
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                        underline="none"
                        color="white"
                    >
                        Product
                    </Link>
                    <Menu
                        id="product-menu"
                        anchorEl={anchorEl}
                        open={openProductMenu}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem>
                            <Link
                                sx={{ fontFamily: "Jost", color: "#8b6ded" }}
                                href="/search"
                                underline="none"
                            >
                                Web
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="https://github.com/the-krafty-koder/tafsiri/"
                                underline="none"
                                sx={{ fontFamily: "Jost", color: "#8b6ded" }}
                            >
                                CLI
                            </Link>
                        </MenuItem>
                    </Menu>
                    <Link
                        href="https://github.com/the-krafty-koder/tafsiri"
                        underline="none"
                        color="white"
                    >
                        Documentation
                    </Link>

                    <Link
                        href="https://github.com/the-krafty-koder/tafsiri"
                        underline="none"
                        color="white"
                    >
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
                            fontFamily: "Jost",
                        }}
                    >
                        <span>Try Sytch </span>
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Navigation;
