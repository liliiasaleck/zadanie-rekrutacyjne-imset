import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { IoIosCall } from "react-icons/io";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { BsPersonFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "rgb(48,48,48)",
    height: "3rem",
  },
  menuButton: {
    marginLeft: "6.5rem",
    marginBottom: "1rem",
    background: "rgba(255,255,255, 0.2)",
    borderRadius: "0",
    width: "3rem",
    height: "2.9rem",
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(2, 2),
    height: "50%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color:"rgb(152,152,152)"
    
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    fontSize:"13px"
  },
  logIn: {
    marginRight: "6rem",
    fontSize:"12px",
    color:"rgb(152,152,152)"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    paddingBottom: "1rem",
  },
  rightText:{
    display:"flex",
    justifyContent:"space-between",
    paddingTop:"0.4rem"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className={classes.right}>
        <div className={classes.rightText}>
          <Typography style={{paddingRight:"2rem", color:"rgb(152,152,152)"}} variant="body2">Centrum obsługi klienta</Typography>
          <Typography variant="body2" style={{color:"#85b82b", fontWeight:"700"}}>
            800 080 800
          </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Szukaj"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button className={classes.logIn} >
            <BsPersonFill />
            Strefa abonanta
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
