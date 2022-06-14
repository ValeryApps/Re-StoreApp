
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Catalog from './pages/Catalog';

function App() {
  const [dark, setDark] = useState(false);
  const paleteMode = dark ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paleteMode
    }
  })
  const handleOnchange = () => {
    setDark(!dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header checked={dark} onChange={handleOnchange} />
      <Container sx={{ marginTop: '2rem' }}>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;


