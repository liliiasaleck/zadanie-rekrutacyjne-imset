import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import support from "../../images/support.jpeg";
import { BsChevronRight } from "react-icons/bs";
import {
  AiFillWechat,
  AiFillAndroid,
  AiFillApple,
  AiFillWindows,
} from "react-icons/ai";
import phone from "../../images/phone.png";


const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    width: "100%",
    height: "45vh",
  },
  boxFirst: {
    width: "65%",
    height: "100%",
    display: "flex",
  },
  boxSecond: {
    width: "35%",
    height: "100%",
    backgroundColor: "white",
    backgroundImage: `url(${phone})`,
    backgroundSize: "60%",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"right bottom"

  },
  boxFdiv: {
    background: "rgb(56,56,56)",
    height: "100%",
    width: "50%",
    paddingTop: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  boxSdiv: {
    height: "100%",
    width: "50%",
    background:
      " linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(20,71,51,1) 36%, rgba(16,108,126,1) 94%)",
  },
  title: {
    color: "#85b82b",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "35px",
  },
  title2: {
    color: "#665290",
    fontWeight: "700",
    fontSize: "12px",
    textTransform: "uppercase",
  },
  price: {
    display: "flex",
    paddingTop: "1rem",
    justifyContent: "flex-end",
  },
  price2: {
    display: "flex",
    flexDirection: "column",
    marginRight: "1rem",
  },
  titleS: {
    color: "rgb(255,250,250)",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "35px",
    paddingTop: "0.5rem",
    paddingLeft: "1rem",
  },
  titleV: {
    color: "#85b82b",
    fontWeight: "700",
    fontSize: "12px",
    textTransform: "uppercase",
    paddingLeft: "1rem",
  },
  chat: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "0.7rem",
  },
  chatTitle: {
    color: "rgb(255,250,250)",
    fontSize: "11px",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  lastTitle: {
    color: "#665290",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "32px",
    paddingLeft: "1.3rem",
    paddingTop: "0.5rem",
  },
  lastTitle2: {
    paddingLeft: "1.3rem",
    paddingTop: "0.5rem",
    fontSize: "12px",
  },
  iconBox:{
    display:"flex",
    justifyContent:"space-between",
    width:"30%",
    paddingTop:"6rem",
    paddingLeft:"1rem"
  },
  icon:{
    color:"grey",
    fontSize:"22px"
  }
}));

export default function LastContainer() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.boxFirst}>
        <div className={classes.boxFdiv}>
          <Typography className={classes.title}>Pakiet 20 gb lte</Typography>
          <Typography className={classes.title2}>Promocja</Typography>
          <Typography
            variant="body2"
            style={{ color: "white", fontWeight: "600" }}
          >
            Dla tych, którzy nie wyobrażają życia
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "white", fontWeight: "600" }}
          >
            bez internetu:
          </Typography>
          <div>
            <Typography
              variant="body2"
              style={{ color: "white", paddingRight: "0.7rem" }}
            >
              oglądaj filmy umieszczone w sieci
            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
              oglądaj duze pliki
            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
              korzystaj z poczty komunikatora
            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
              sufruj swobodnie
            </Typography>
          </div>
          <div className={classes.price}>
            <div className={classes.price2}>
              <Typography
                style={{
                  color: "#85b82b",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                swoboda
              </Typography>
              <Typography
                style={{
                  color: "#85b82b",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                i mobilność za
              </Typography>
            </div>
            <Typography
              variant="h3"
              style={{ color: "#665290", fontWeight: "700" }}
            >
              50 zł
            </Typography>
          </div>
        </div>
        <div className={classes.boxSdiv}>
          <Typography className={classes.titleS}>Nasz support</Typography>
          <Typography className={classes.titleV}>
            Propozycja naszego TV-maniaka na weekend
          </Typography>
          <Typography className={classes.titleV}>na weekend</Typography>
          <div Typography className={classes.chat}>
            <img
              src={support}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                marginTop: "0.4rem",
              }}
            />
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <Typography className={classes.chatTitle}>
                    Zobacz co Kuba
                  </Typography>
                  <Typography className={classes.chatTitle}>
                    znalazł ciekawego
                  </Typography>
                  <Typography className={classes.chatTitle}>
                    w TV na weekend
                  </Typography>
                </div>
                <div>
                  <BsChevronRight
                    style={{ fontSize: "35px", color: "rgb(255,250,250)" }}
                  />
                </div>
              </div>
              <Divider
                style={{
                  backgroundColor: "grey",
                  marginTop: "0.3rem",
                  marginBottom: "0.3rem",
                }}
              />
              <div style={{ display: "flex" }}>
                <div>
                  <Typography className={classes.chatTitle}>
                    Podyskutuj z nim
                  </Typography>
                  <Typography className={classes.chatTitle}>
                    o filmach juz
                  </Typography>
                  <Typography className={classes.chatTitle}>
                    w piątek 15.09 2014
                  </Typography>
                </div>
                <div>
                  <AiFillWechat
                    style={{
                      fontSize: "38px",
                      color: "rgb(255,250,250)",
                      paddingLeft: "0.5rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Typography
            style={{
              color: "#85b82b",
              fontSize: "12px",
              fontWeight: "500",
              paddingLeft: "5rem",
              paddingTop: "0.5rem",
              fontWeight: "600",
            }}
          >
            Zostań naszym ekspertem i poprowadz
          </Typography>
          <Typography
            style={{
              color: "#85b82b",
              fontSize: "12px",
              fontWeight: "500",
              paddingLeft: "5rem",
              fontWeight: "600",
            }}
          >
            przedweekendowy czat z uzytkownikami
          </Typography>
        </div>
      </div>
      <div className={classes.boxSecond}>
        <Typography className={classes.lastTitle}>Aplikacja</Typography>
        <Typography className={classes.lastTitle2}>
          Cillum officia id nostrud laboris dolor ex.
        </Typography>
        <Typography className={classes.lastTitle2}>
          Cillum enim dolore ullamco ex ut nulla dolor
        </Typography>
        <Typography className={classes.lastTitle2}>
          occaecat eiusmod.
        </Typography>
        <div className={classes.iconBox}>
          <AiFillAndroid className={classes.icon} />
          <AiFillApple className={classes.icon}/>
          <AiFillWindows className={classes.icon}/>
        </div>
      </div>
    </Box>
  );
}
