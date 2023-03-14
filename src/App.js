import "./App.css";
import Header from "./components/Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Contextvalues } from "./context/context";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  const { mode } = Contextvalues();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
