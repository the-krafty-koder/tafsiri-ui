import Navigation from "../header/Navigation";
import "./Search.css";
import {
    Grid,
    Stack,
    TextField,
    IconButton,
    CircularProgress,
    Backdrop,
    Select,
    MenuItem,
    Alert,
    Snackbar,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { z } from "zod";
import glassImage from "../../assets/glass.gif";
import Footer from "../footer/Footer";
import searchInOpen from "../../core/fetcher/searchInOpen";
import SubsList from "./SubsList/SubsList";
import { Subtitle } from "./Sub/types";
import { languages } from "../../core/common_languages";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const inputSchema = z.object({
    title: z.string(),
    season: z.number().optional(),
    episode: z.number().optional(),
    language: z.string(),
});

const Search = () => {
    const [values, setValues] = useState({
        title: "",
        season: "",
        episode: "",
        language: "",
    });

    const [backdrop, setBackdrop] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [results, setResults] = useState<{ data: Subtitle[] }>({ data: [] });

    const handleSubmit = async () => {
        const { season, episode, language, title } = values;
        const validated = inputSchema.safeParse({
            title: title === "" ? null : title,
            language: language === "" ? null : language,
            season: parseInt(season),
            episode: parseInt(episode),
        });
        if (!validated.success) {
            const errors: string[] = [];
            validated.error.errors.map(({ message, path }) => 
                errors.push(`${path}:${message}`)
            );
            setErrors(errors);
        }else{
            setBackdrop(true);
        }

        
        const newSubs = await searchInOpen({
            ...values,
            episode: parseInt(values.episode),
            season: parseInt(values.season),
        });
        setResults(newSubs);
        setBackdrop(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Navigation />
            <Grid container className="input">
                <Grid item xs={2}></Grid>
                <Grid className="parameters" item xs={8}>
                    <Stack direction="column" spacing={2}>
                        <Stack direction="row" spacing={5}>
                            <Stack direction="column" spacing={1}>
                                <span className="label">Title</span>
                                <TextField
                                    variant="standard"
                                    value={values.title}
                                    onChange={(event) => {
                                        setValues({
                                            ...values,
                                            title: event.target.value,
                                        });
                                    }}
                                />
                            </Stack>
                            <Stack direction="column" spacing={1}>
                                <span className="label">Season</span>
                                <TextField
                                    variant="standard"
                                    value={values.season}
                                    onChange={(event) => {
                                        setValues({
                                            ...values,
                                            season: event.target.value,
                                        });
                                    }}
                                    type="text"
                                />
                            </Stack>
                            <Stack direction="column" spacing={1}>
                                <span className="label">Episode</span>
                                <TextField
                                    variant="standard"
                                    value={values.episode}
                                    onChange={(event) => {
                                        setValues({
                                            ...values,
                                            episode: event.target.value,
                                        });
                                    }}
                                    type="text"
                                />
                            </Stack>
                            <Stack
                                direction="column"
                                spacing={1}
                                sx={{ minWidth: "12vw" }}
                            >
                                <span className="label">Language</span>
                                <Select
                                    value={values.language}
                                    variant="standard"
                                    onChange={(event) => {
                                        setValues({
                                            ...values,
                                            language: event.target.value,
                                        });
                                    }}
                                    sx={{ fontFamily: "Jost" }}
                                                                    >
                                    {Object.entries(languages).map(
                                        ([language, code]) => {
                                            return (
                                                <MenuItem
                                                    key={code}
                                                    value={code}
                                                >
                                                    {language}
                                                </MenuItem>
                                            );
                                        }
                                    )}
                                </Select>
                            </Stack>
                            <Stack className="search">
                                <IconButton onClick={handleSubmit}>
                                    <SearchIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container className="resultsList">
                <Grid item xs={2}></Grid>
                <Grid className="parameters" item xs={8}>
                    <Stack direction="column">
                        {results.data.length > 0 ? (
                            <SubsList subtitles={results?.data || []} />
                        ) : (
                            <img
                                src={glassImage}
                                alt="search-placeholder"
                            ></img>
                        )}
                    </Stack>
                </Grid>
            </Grid>
            <Grid container className="error">
                <Stack>
                    <Snackbar
                        open={errors.length > 0}
                        autoHideDuration={6000}
                        onClose={() => setErrors([])}
                    >
                        <Alert severity="warning" sx={{ width: "100%" }}>
                            <span>Invalid parameters </span>
                            <br />
                            {errors.map((error, ind) => (
                                <>
                                    <span>
                                        {ind}: {error}
                                    </span>
                                    <br />
                                </>
                            ))}
                        </Alert>
                    </Snackbar>
                </Stack>
            </Grid>
            <Footer />

            <Backdrop open={backdrop} onClick={() => setBackdrop(false)}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </ThemeProvider>
    );
};

export default Search;
