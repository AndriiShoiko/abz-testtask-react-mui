import { createTheme } from '@mui/material/styles';

const yellow = '#F4E041';
const blue = '#00BDD3';
const lightGray = '#F8F8F8';
const error = "#CB3D40";


export const theme = createTheme(
    {
        palette: {
            common: {
                yellow,
                blue,
                lightGray,
                error
            }
        },
        typography: {
            h1: {
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "2.5rem",
                lineHeight: "40px"
            },
            subtitle1: {
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "26px"
            },
            body1: {
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "26px"
            }
        },
    }
);