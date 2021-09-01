import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  box: {
    
    },
}));

export default function App() {
  const classes = useStyles();

  return (
    < Box className={classes.box}>
    <CssBaseline/>
     <Navbar/>
     <Main/>
     <Footer/>
    </Box>
  );
}

