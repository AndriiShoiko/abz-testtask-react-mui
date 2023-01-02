import { Typography, Box } from "@mui/material";
import { Button } from "../ui/Button";
import { makeStyles } from 'tss-react/mui';

import background from "../assets/test-assignment-background.jpg";

const useStyles = makeStyles()((theme) => {
    return {
        intro: {
            width: "100%",
            height: 650,
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: 140,
            [theme.breakpoints.down("sm")]: {
                height: 500,
            }
        },
        intro_wrapper: {
            width: 390,
            textAlign: "center",
            color: "white",
            [theme.breakpoints.down("sm")]: {
                width: 330,
            }
        },
    };
});

export const Intro = ({ handlerToPostSection }) => {

    const { classes } = useStyles();

    return (
        <Box className={classes.intro} component="section">
            <Box className={classes.intro_wrapper}>
                <Typography variant="h1" paddingBottom="21px">
                    Test assignment for front-end developer
                </Typography>
                <Typography variant="subtitle1" paddingBottom="23px">
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
                    with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                    They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </Typography>
                <Button onClick={handlerToPostSection}>Sign up</Button>
            </Box>
        </Box>
    )
}
