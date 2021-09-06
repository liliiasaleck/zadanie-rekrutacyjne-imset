import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { BsFillPeopleFill } from "react-icons/bs";
import background from "../../images/network.jpeg";
import avangers from "../../images/avengers.jpeg";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    width: "100%",
    height: "50vh",
  },
  boxImage: {
    width: "65%",
    height: "100%",
    paddingTop: "5rem",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  },
  boxImage2: {
    width: "35%",
    height: "100%",
    backgroundImage: `url(${avangers})`,
    backgroundSize: "cover",
  },
  boxSecond: {
    width: "100%",
    height: "100%",
    paddingLeft: "2rem",
    background: "rgba(0,0,0,0.4)",
  },
  boxFirst: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.3)",
  },
  leftText: {
    paddingLeft: "2rem",
    textTransform: "uppercase",
  },
  price: {
    display: "flex",
  },
  movie: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function MainContainer() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.boxImage}>
        <div className={classes.boxFirst}>
          <div className={classes.leftText}>
            <Typography
              variant="h4"
              style={{
                color: "white",
                fontWeight: "600",
                paddingBottom: "7rem",
              }}
            >
              Zyskaj więcej
            </Typography>
            <div>icons</div>

            <Typography
              variant="h4"
              style={{ color: "white", fontWeight: "600" }}
            >
              Kup internet,
            </Typography>
            <div className={classes.price}>
              <div>
                <Typography
                  variant="h4"
                  style={{
                    color: "#665290",

                    fontWeight: "600",
                  }}
                >
                  HBOGO
                </Typography>
                <Typography variant="h6" style={{ color: "white" }}>
                  dostaniesz za
                </Typography>
              </div>
              <Typography
                variant="h2"
                style={{
                  color: "rgb(218,50,135)",
                  fontWeight: "600",
                  paddingTop: "0.5rem",
                }}
              >
                1 zł
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.boxImage2}>
        <div className={classes.boxSecond}>
          <Typography
            variant="h6"
            style={{ color: "white", fontWeight: "700", paddingTop: "4rem" }}
          >
            VOD
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "white",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            video na ządanie
          </Typography>
          <div className={classes.movie}>
            <div>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  paddingTop: "12rem",
                  fontWeight: "600",
                }}
              >
                Kapitan Ameryka:
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "white", fontWeight: "600" }}
              >
                Zimowy zołnierz
              </Typography>
              <Typography style={{ color: "white" }}>
                Nowości - Akcja 14,00 zł
              </Typography>
            </div>
            <div style={{ paddingRight: "2.3rem" }}>
              
              <Typography
                variant="body2"
                style={{ color: "white", paddingTop: "12.5rem", }}
              >
                Film
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "white", paddingBottom: "0.6rem",  }}
              >
                obejrzy
              </Typography>
              <Typography style={{ color: "white", fontWeight: "600" }}>
                125 <BsFillPeopleFill style={{ fontSize: "18px" }} />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
