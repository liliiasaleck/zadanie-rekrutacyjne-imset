import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TopContainer from "./containers/TopContainer";
import MiddleContainer from "./containers/MiddleContainer";
import BottomContainer from "./containers/BottomContainer";

const useStyles = makeStyles((theme) => ({
    box: {
        height: "140vh",
        overflowY: "auto",
        marginLeft:"8rem",
        marginRight:"8rem",

      },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </div>
  );
}
