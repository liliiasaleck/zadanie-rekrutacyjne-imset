import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LastContainer from "./containers/LastContainer";
import MainContainer from "./containers/MainContainer";
import SecondContainer from "./containers/SecondContainer";

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: "pink",
        width:"100vw",
        height: "100vh"
      },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <MainContainer />
      <SecondContainer />
      <LastContainer />
    </div>
  );
}
