import { Container } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Header } from "./components/Header";
import { theme } from "./style/Theme";

import { makeStyles } from 'tss-react/mui';

import { Intro } from "./components/Intro";
import { GetRequest } from "./components/GetRequest";
import { PostRequest } from "./components/PostRequest";

import { useRef } from "react";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      maxWidth: "1170px",
      minWidth: "360px",
      [theme.breakpoints.down("xl")]: {
        maxWidth: "1170px",
      },
    }
  };
});

export const App = () => {

  const { classes } = useStyles();

  const getRequstRef = useRef(null);
  const postRequstRef = useRef(null);

  const handlerToGetSection = () => {
    getRequstRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const handlerToPostSection = () => {
    postRequstRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container} disableGutters>
        <Header handlerToGetSection={handlerToGetSection} handlerToPostSection={handlerToPostSection} />
        <Intro handlerToPostSection={handlerToPostSection} />
        <GetRequest refProp={getRequstRef} />
        <PostRequest refProp={postRequstRef} />
      </Container>
    </ThemeProvider>
  );
}
