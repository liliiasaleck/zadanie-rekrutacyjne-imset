import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Divider, Typography, Link } from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: "130px",
    background: "rgb(48,48,48)",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0.3rem",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftSide: {
    marginLeft: "6.5rem",
    width: "55%",
  },
  rightSide: {
    marginRight: "6.5rem",
    display: "flex",
    flexDirection: "column",
  },
  bar: {
    display: "flex",
    justifyContent: "space-between",
  },
  barLinks: {
    display: "flex",
    width: "40%",
    justifyContent: "space-between",
    paddingTop: "0.7rem",
  },
  links: {
    color: "rgb(152,152,152)",
  },
  logos: {
    paddingTop: "0.7rem",
    display: "flex",
    width: "15%",
    justifyContent: "space-between",
  },
  divLogo: {
    backgroundColor: "rgb(96,96,96)",
    width: "1.7rem",
    height: "1.7rem",
    borderRadius: "50%",
  },
  singleLogo: {
    position: "relative",
    top: "5px",
    left: "6px",
    color: "rgb(48,48,48)",
  },
  download: {
    display: "flex",
  },
  call: {
    display: "flex",
    height: "1rem",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.leftSide}>
          <div className={classes.top}>
            <div>
              <Typography
                variant="caption"
                style={{
                  color: "rgb(152,152,152)",
                  textTransform: "uppercase",
                }}
              >
                Aplikacja Vectra
              </Typography>
              <div className={classes.download}>
                <FaDownload
                  style={{
                    fontSize: "3.5rem",
                    paddingRight: "1rem",
                    color: "#665290",
                  }}
                />
                <div>
                  <Typography
                    style={{
                      color: "#665290",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                    variant="caption"
                  >
                    Pobierz
                  </Typography>
                  <Typography
                    style={{
                      color: "#665290",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                    variant="h5"
                  >
                    Aplikację
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <Typography
                variant="caption"
                style={{
                  color: "rgb(152,152,152)",
                  textTransform: "uppercase",
                }}
              >
                Infolinia Sprzedazowa
              </Typography>
              <Typography
                style={{
                  color: "#85b82b",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
                variant="body2"
              >
                Zadzwon lub wyslij sms
              </Typography>

              <Typography
                style={{
                  color: "#85b82b",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
                variant="h5"
              >
                601 601 601
              </Typography>
            </div>
          </div>
          <div>
            <Divider
              style={{
                backgroundColor: "rgb(152,152,152)",
              }}
            />
            <div className={classes.bar}>
              <div className={classes.barLinks}>
                <Link className={classes.links} href="#">
                  O nas
                </Link>
                <Link className={classes.links} href="#">
                  Kontakt
                </Link>
                <Link className={classes.links} href="#">
                  Kariera
                </Link>
                <Link className={classes.links} href="#">
                  Dla mediów
                </Link>
              </div>
              <div className={classes.logos}>
                <div className={classes.divLogo}>
                  <FaFacebookF className={classes.singleLogo} />
                </div>
                <div className={classes.divLogo}>
                  <FaTwitter className={classes.singleLogo} />
                </div>
                <div className={classes.divLogo}>
                  <FaYoutube className={classes.singleLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>
          <Typography
            variant="caption"
            style={{
              color: "rgb(152,152,152)",
              textTransform: "uppercase",
            }}
          >
            Centrum obslugi klienta
          </Typography>
          <Typography
            style={{
              color: "#85b82b",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
            variant="body2"
          >
            Zadzwon
          </Typography>
          <Typography
            style={{
              color: "#85b82b",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
            variant="h5"
          >
            800 080 800
          </Typography>
          <Typography
            variant="caption"
            style={{
              color: "rgb(152,152,152)",
              textTransform: "uppercase",
            }}
          >
            Z telefonu komorkowego
          </Typography>
          <Typography
            style={{
              color: "#85b82b",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
            variant="body2"
          >
            58 500 65 00
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
