import { AppBar, Toolbar, Typography, Stack, Link } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import logoCat from "../assets/logo-cat.svg";
import { Button } from '../ui/Button';

const useStyles = makeStyles()((theme) => {
    return {
        appBar: {
            backgroundColor: "#F8F8F8",
            boxShadow: "none",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                paddingLeft: "32px",
                paddingRight: "32px",
            },
            [theme.breakpoints.down("sm")]: {
                paddingLeft: "16px",
                paddingRight: "16px",
            }
        },
        toolBar: {
            width: "100%",
        },
        logoCaption: {
            ...theme.typography.subtitle1,
            textTransform: "uppercase",
            color: "#000000de"
        },
        headerButton: {
            marginLeft: 'auto',
        },
        headerLogo: {
            textDecoration: "none",
            cursor: "pointer"
        }
    };
});

export const Header = ({ handlerToGetSection, handlerToPostSection }) => {

    const { classes } = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Stack direction="row" spacing={1} component={Link} className={classes.headerLogo} >
                    <img alt='logo cat' src={logoCat} width={39} height={26} />
                    <Typography className={classes.logoCaption}>
                        Testtask
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} className={classes.headerButton}>
                    <Button onClick={handlerToGetSection}>Users</Button>
                    <Button onClick={handlerToPostSection}>Sign up</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

