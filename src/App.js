// import logo from './logo.svg';
import { Box } from '@chakra-ui/react';
import './App.css';
// import { useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitCalender from './components/GitCalender';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import Skills from './components/Skills';

function App() {
  // const homeRef = useRef(null)
  // // const skillsRef = useRef(null)
  // const projectRef = useRef(null)
  // const contactRef = useRef(null)
  // const aboutRef = useRef(null)
  return (
    <Box className='App'>
      <Box bgImage='./background.jpg' bgPos={'center'} bgSize='cover'>
      <Navbar />
      <Home /> 
      <About />
      <Project />
      <Skills />
      <GitCalender/>
      <Contact
      // ContactRef={contactRef} 
      />
      <Footer />
     </Box> 
     
      </Box>
  );
}

export default App;
