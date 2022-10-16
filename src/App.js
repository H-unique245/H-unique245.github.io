// import logo from './logo.svg';
import { Box } from '@chakra-ui/react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Box>
      <Navbar/>
     <h2>This is my portfoliio website</h2> 

        </Box>
        <Box mt="3rem">
      <About />
      </Box>
      </>
  );
}

export default App;
