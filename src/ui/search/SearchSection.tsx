import { Button, Grid, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./SearchSection.css";
import darkTheme from "./Search";
import webSearch from "../../assets/webSearch.gif";
import { ArrowCircleRightOutlined } from "@mui/icons-material";

const SearchSection = () => {
    return (
        <Grid container className="section">
            <Grid item xs={2}></Grid>
            <Grid item xs={3} className="webSearch">
                <Stack direction="column" spacing={2}>
                    <h4>
                        {" "}
                        One{" "}
                        <a href="/search" className="italics">
                            Click
                        </a>{" "}
                        Downloads!{" "}
                    </h4>
                    <div>
                        Elevate your viewing experience by seamlessly
                        integrating subtitles into your favorite movies and TV
                        shows.
                        <br />
                        <br />
                        Our user-friendly interface and vast subtitle library
                        make finding and downloading subtitles a breeze.
                    </div>
                    <Button
                        href='/search'
                        variant="contained"
                        className="downloadIcon"
                        endIcon={<ArrowCircleRightOutlined />}
                        sx={{backgroundColor: 'rgba(139, 109, 237)', fontFamily: 'Jost'}}
                    >
                        Download
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={7}>
                <img src={webSearch} alt="web-search-image"></img>
            </Grid>
        </Grid>
    );
};

export default SearchSection;
