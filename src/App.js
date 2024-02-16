import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Section3 from './section 3/section3';
import Home from './home/Home';
import Section4 from './section 4/Section4';
import Section5 from './section5/Section5';
import Section6 from './section6/Section6';

function App() {
  return (
    <Box>
      <Header />
      <Home />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
    </Box>
  );
}

export default App;
