import { Button, Link, Menu, MenuItem, Stack } from "@mui/material";
import "./Header.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import GitHubIcon from "@mui/icons-material/GitHub";
import Description from "../description/Description";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="main">
            <Stack className="navigation" direction="row" spacing={1}>
                <Stack className="logo" direction="row" spacing={1}>
                    <SubtitlesIcon className="logoImage" />
                    <h3>tafsiri</h3>
                </Stack>
                <Stack
                    className="navigationContent"
                    direction="row"
                    spacing={2}
                >
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
                        <Menu open={open} onClose={() => setOpen(false)}>
                            <MenuItem>SDK</MenuItem>
                            <MenuItem>Source code</MenuItem>
                        </Menu>
                    </Stack>
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
                            href="https://github.com/the-krafty-koder/tafsiri"
                            sx={{
                                color: "white",
                                backgroundColor: "rgba(139, 109, 237, .8)",
                            }}
                        >
                            <span>Try Tafsiri</span>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            <Description />
        </div>
    );
};

export default Header;
