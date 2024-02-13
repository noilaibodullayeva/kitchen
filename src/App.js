import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Section3 from './section 3/section3';
import Home from './home/Home';
import Section4 from './section 4/Section4';

function App() {
  return (
    <Box>
      <Header />
      <Home />
      <Section3 />
      <Section4 />
    </Box>
  );
}

export default App;
