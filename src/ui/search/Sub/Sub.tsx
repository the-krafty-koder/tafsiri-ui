import "./Sub.css";
import { Alert, IconButton, Snackbar, Stack, Grid } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Subtitle } from "./types";
import fetchDownloadUrl from "../../../core/downloader/fetchDownloadUrl";
import { useState } from "react";
import { CancelOutlined, HelpOutlineRounded } from "@mui/icons-material";
import downloadSubtitle from "../../../core/downloader/downloadSubtitle";

const Sub = ({
    title,
    fileId,
    language,
    hd,
    fromTrusted,
    release,
}: Subtitle) => {
    const [openToast, setOpenToast] = useState(false);

    const handleDownloadClicked = async () => {
        const downloadUrl = fileId && await fetchDownloadUrl(fileId)
        if(!downloadUrl){
            setOpenToast(true)
        } else{
            await downloadSubtitle(release, downloadUrl)
        }
    }

    return (
        <div className="result">
            <Grid container>
                <Grid item xs={10} className="resultContent">
                            <Grid container spacing={5}>
                                <Grid item xs={3}>
                                    <Stack direction="column" spacing={3}>
                                        <h4>Title</h4>
                                        <span>{title}</span>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack direction="column" spacing={3}>
                                        <h4>Language</h4>
                                        <span>{language}</span>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack direction="column" spacing={3}>
                                        <h4>Source</h4>
                                        {fromTrusted ? (
                                            <CheckCircleOutlineOutlinedIcon />
                                        ) : (
                                            <HelpOutlineRounded />
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack direction="column" spacing={3}>
                                        <h4>Hd</h4>
                                        {hd ? (
                                            <CheckCircleOutlineOutlinedIcon />
                                        ) : (
                                            <CancelOutlined />
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                </Grid>
                <Grid item xs={2} className="download">
                    <IconButton onClick={handleDownloadClicked}>
                        <DownloadForOfflineOutlinedIcon sx={{ color: "#8b6ded" }}/>
                    </IconButton>
                    
                </Grid>

                <Snackbar open={openToast} autoHideDuration={6000} onClose={() => setOpenToast(false)}>
                    <Alert severity="warning" sx={{ width: '100%' }}>
                        Donwload file unavailable for now
                    </Alert>
                </Snackbar>
                
            </Grid>
        </div>
    );
};

export default Sub;
