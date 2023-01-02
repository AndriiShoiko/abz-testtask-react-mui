import { Button as MuiButton } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        button: {
            backgroundColor: theme.palette.common.yellow,
            color: "#000000de",
            borderRadius: "80px",
            minWidth: "100px",
            paddingTop: "4px",
            paddingBottom: "4px",
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "26px",
            boxShadow: "none",
            textTransform: "none",
            "&:hover": {
                backgroundColor: "#FFE302",
                boxShadow: "none",
            },
            "&.Mui-disabled": {
                backgroundColor: "#B4B4B4",
                color: "#ffffffde"
            }
        }
    };
});

export const Button = (props) => {

    const { classes } = useStyles();

    return (
        <MuiButton variant="contained" size="medium" className={classes.button} {...props}>
            {props.children}
        </MuiButton>
    )
}
