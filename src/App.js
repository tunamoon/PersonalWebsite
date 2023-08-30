import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, Divider, ThemeProvider, Typography } from '@mui/material';
import { useEffect } from 'react';
import theme, { Colors } from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';

function App() {

  useEffect(() => {
    document.title = "React Material UI - Home"; //title name, shown on tab
  }, []);
  return (
    <ThemeProvider theme={theme}>
    <Container
      maxWidth="xl"
      sx={{
        background: '#F8F8F8'
      }}
    >
      <UIProvider>

        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent={"center"} sx={{p: 2}}>
          <Typography 
            sx={{fontSize: '2em',
            fontFamily: 'Merriweather',
            color: Colors.darkGreen,}}
          >
              Who am I?
            </Typography>
        </Box>
        <Products />
        <Footer />
        <AppDrawer />
        <SearchBox />
      </UIProvider>
      

    </Container>
    </ThemeProvider>
    
  );
}

export default App;
