import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Section3 from './section 2/section3';
import Home from './home/Home';
import slides from "../src/home/mock.json"

function App() {
  return (
    <Box>
      <Header />
      <Home slides={slides}/>
      <Section3 />
    </Box>
  );
}

export default App;
