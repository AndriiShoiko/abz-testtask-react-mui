import { Card, CardContent, Avatar, Typography, Zoom } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        cardContent: {
            textAlign: "center",
            flexDirection: "column",
            padding: 20,
            minWidth: 0

        },
        card: {
            borderRadius: 10,
            border: "none",
        },
        avatar: {
            width: "70px",
            height: "70px",
            margin: "auto"
        },
        cardName: {
            marginTop: "20px",
            marginBottom: "20px"
        },
        cardMail: {
            ...theme.typography.body1,
            color: "#000000de",
            textDecoration: "none",
            cursor: "pointer"
        }
    };
});

export const CardPeople = ({ name, email, phone, position, photo }) => {

    const { classes } = useStyles();

    return (
        <Zoom in={true}>
            <Card variant='outlined' color='white' className={classes.card}>
                <CardContent component="div" className={classes.cardContent}>
                    <Avatar alt='avatar' src={photo} className={classes.avatar} />
                    <Typography variant="subtitle1" className={classes.cardName} noWrap>
                        {name}
                    </Typography>
                    <Typography variant="body1" noWrap>
                        {position}
                    </Typography>
                    <Typography variant="body1" noWrap className={classes.cardMail}>
                        {email}
                    </Typography>
                    <Typography variant="body1" noWrap>
                        {phone}
                    </Typography>
                </CardContent>
            </Card>
        </Zoom>
    )
}
