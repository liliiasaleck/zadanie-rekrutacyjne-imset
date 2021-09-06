import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import { RiComputerLine } from "react-icons/ri";
import { BiMouseAlt } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { GrInternetExplorer } from "react-icons/gr";
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    width: "100%",
    height: "40vh",
  },
  boxFirst: {
    background: "#665290",
    width: "65%",
    height: "100%",
  },
  boxSecond: {
    width: "35%",
    height: "100%",
  },
  logos: {
    display: "flex",
    justifyContent: "space-around",
    margin: "2rem",
  },
  title: {
    color: "rgb(255,250,250)",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  subTitle: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "12px",
  },
  lastTitle: {
    color: "rgb(255,250,250)",
    textTransform: "lowcase",
    fontWeight: "700",
    fontSize: "15px",
  },
  boxText: {
    marginLeft: "1rem",
    marginTop: "1rem",
  },
  button: {
    color: "rgb(255,250,250)",
    fontWeight: "700",
    border: "solid white 1px",
    width: "25rem",
    borderRadius: "0px",
    background: "rgba(0, 0, 0, 0.2)",
  },
  mainLogo: {
    fontSize: "40px",
    color: "#665290",
    position: "relative",
    top: "10px",
    left: "12px",
  },
  divLogo: {
    borderRadius: "50%",
    width: "4.2rem",
    height: "4rem",
    backgroundColor: "rgb(255,250,250)",
  },
  smallLogo: {
    color: "rgb(255,250,250)",
    fontSize: "20px",
    position: "relative",
    top: "20px",
  },
  btnBox: {
    marginLeft: "11rem",
    marginTop: "5rem",
  },
  logoText: {
    color: "rgb(255,250,250)",
    fontSize: "10px",
    fontWeight: "700",
    position: "relative",
    top: "20px",
    left: "5px",
    textTransform: "uppercase",
  },
  greenBox: {
    background: "#85b82b",
    width: "100%",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around",
    paddingTop:"0.4rem",

  },
  greenFText: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
  },
  greenSText: {
    color: "white",

  },
}));

export default function SecondContainer() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.boxFirst}>
        <div className={classes.boxText}>
          <Typography className={classes.title} variant="h4">
            Stwórz swój własny pakiet
          </Typography>
          <Typography className={classes.subTitle}>
            Telewizja - Internet - Telefon
          </Typography>
        </div>
        <div className={classes.logos}>
          <div className={classes.divLogo}>
            <RiComputerLine className={classes.mainLogo} />
            <Typography className={classes.logoText}>
              Wybierz ulubione kanały TV
            </Typography>
          </div>
          <AiOutlinePlus className={classes.smallLogo} />
          <div className={classes.divLogo}>
            <BiMouseAlt className={classes.mainLogo} />
            <Typography className={classes.logoText}>
              Wybierz prędkość internetu
            </Typography>
          </div>
          <AiOutlinePlus className={classes.smallLogo} />
          <div className={classes.divLogo}>
            <IoCallSharp className={classes.mainLogo} />
            <Typography className={classes.logoText}>
              Wybierz iłośc minut n arozmowy
            </Typography>
          </div>
          <AiOutlinePlus className={classes.smallLogo} />
          <div className={classes.divLogo}>
            <GrInternetExplorer className={classes.mainLogo} />
            <Typography className={classes.logoText}>
              Wybierz internet mobilny
            </Typography>
          </div>
        </div>
        <div className={classes.btnBox}>
          <Button className={classes.button}>Stwórz Pakiet</Button>
          <Typography className={classes.lastTitle}>
            lub wybierz pakiet, przygotowany przez nas
          </Typography>
        </div>
      </div>
      <div className={classes.boxSecond}>
        <div className={classes.greenBox}>
          <div className={classes.greenFText}>
            <Typography variant="h5" style={{ fontWeight: "600" }}>Teraz</Typography>
            <Typography variant="h5" style={{ fontWeight: "600" }}>w TV online</Typography>
          </div>
          <Divider
            orientation="vertical"
            style={{
              backgroundColor: "white",
              height: "70%",
              marginTop: "10px",
            }}
          />
          <div className={classes.greenSText}>
            <Typography variant="body2" style={{fontWeight: "500" }}
               >Teraz </Typography>
            <Typography variant="body2" style={{paddingBottom: "0.5rem",fontWeight: "500" }}>ogląda</Typography>
            <Typography style={{ fontWeight: "600" }}>
              258 <BsFillPeopleFill style={{ fontSize: "18px" }} />
            </Typography>
          </div>
        </div>
        <div>
          <ReactPlayer controls height="248px" width="100%" url="https://www.youtube.com/watch?v=oqxAJKy0ii4" />
        </div>
      </div>
    </Box>
  );
}
