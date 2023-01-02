import { Typography, Box, Grid } from "@mui/material";
import { Button } from "../ui/Button";
import { CardPeople } from "../ui/CardPeople";
import { ShowError } from "../ui/ShowError";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector, loadUsers, STATUS_IDLE, STATUS_LOADING } from "../store/slices/usersSlice";

import { makeStyles } from 'tss-react/mui';
import { LoaderItem } from "../ui/LoaderItem";

const useStyles = makeStyles()((theme) => {

    return {
        peopleCards: {
            [theme.breakpoints.down("md")]: {
                paddingLeft: 60,
                paddingRight: 60
            },
            [theme.breakpoints.down("sm")]: {
                paddingLeft: 32,
                paddingRight: 32
            },
            [theme.breakpoints.down("xs")]: {
                paddingLeft: 16,
                paddingRight: 16
            },
            marginBottom: "50px"
        },
    };
});

export const GetRequest = ({refProp}) => {

    const { classes } = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        const promise = dispatch(loadUsers());
        return () => {
            promise.abort();
        }
    }, [dispatch]);

    const users = useSelector(state => usersSelector(state));

    const returnPeopleCards = () => {
        return (
            <Box className={classes.peopleCards}>
                <Grid container direction="row" spacing={{ xs: "20px", sm: "16px", md: "29px" }} columns={12}>
                    {users.entities.users?.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id} >
                            <CardPeople {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }

    const returnPreloaderCards = () => {

        const arrCount = [1, 2, 3, 4, 5, 6];

        return (
            <Box className={classes.peopleCards}>
                <Grid container direction="row" spacing={{ xs: "20px", sm: "16px", md: "29px" }} columns={12}>
                    {arrCount.map((element) => (
                        <Grid item xs={12} sm={6} md={4} key={element}>
                            <LoaderItem />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }

    const getPostComp = () => {

        if (users.loading === STATUS_LOADING) {
            return returnPreloaderCards();
        }
        if (users.loading === STATUS_IDLE) {
            return returnPeopleCards();
        }
    }

    return (
        <Box width="100%" component="section" ref={refProp}>
            <Typography variant="h1" align="center" marginBottom="50px">
                Working with GET request
            </Typography>
            {getPostComp()}
            <Box display="flex" justifyContent="center" marginBottom="140px">
                <Button disabled={!users.entities?.links?.next_url} onClick={() => dispatch(loadUsers(users.entities.links.next_url))}>Show more</Button>
            </Box>
            {
                users.error !== null && <ShowError textError={users.error} />
            }
        </Box>
    )
}

