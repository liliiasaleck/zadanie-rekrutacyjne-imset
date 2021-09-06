import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import '../src/App.css';



const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor:"rgb(16,16,16)",
    width:"100vw"

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

