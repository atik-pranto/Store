import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
      <>
        <ThemeProvider theme = {theme}>
          <CssBaseline/>
          <Header/>
          <Container>
            <Catalog />
          </Container>
        </ThemeProvider>
      </>
  )
}

export default App
