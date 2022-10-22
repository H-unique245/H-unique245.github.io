// import logo from './logo.svg';
import { Box } from '@chakra-ui/react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Projects';

function App() {
  return (
    <>
    <Box >
      <Navbar />
      <Home /> 
      <About />
      <Project />
     </Box> 
      </>
  );
}

export default App;
