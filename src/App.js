// import logo from './logo.svg';
import { Box } from '@chakra-ui/react';
import './App.css';
import About from './components/About';
import GitCalender from './components/GitCalender';
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
      <GitCalender/>
     </Box> 
      </>
  );
}

export default App;
