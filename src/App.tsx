import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ReactFlowPlayground from "./components/ReactFlowPlayground";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactFlowPlayground />
    </ThemeProvider>
  );
}

export default App;
