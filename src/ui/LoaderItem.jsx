import { Box, CircularProgress, Fade } from "@mui/material";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {

    return {
        loaderGridItem: {
            textAlign: "center",
            minHeight: "258px",
        },
        circularProgress: {
            marginTop: "20px",
            color: theme.palette.common.blue,
        }
    };
});

export const LoaderItem = () => {

    const { classes } = useStyles();

    return (
        <Fade in={true} style={{ transitionDelay: '100ms' }}>
            <Box className={classes.loaderGridItem}>
                <CircularProgress size={70} className={classes.circularProgress} />
            </Box>
        </Fade>
    )
}
