import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";


// export default class Project extends Component {
//     render() {
export default function Project() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const projects= [
        {
            name:"Shopbop clone",
            description:"Shopbop is the global retail application, basically it is an e-commerce website. In this project the tech stacks used are HTML, CSS, JavaScript.",
            image: "./shopbop.png",
            tech: ["HTML" ,"CSS", "JavaScript"],
            project:"Individual Project",
            deploylink:"https://beautiful-cendol-f856f5.netlify.app/",
            githublink:'https://github.com/H-unique245/Shopbp'
        },
        {
            name:"Kindmeal clone",
            description:"Construct Week project of cloning Kindmeal.my. This project is build by tech stacks using React, javascript, HTML, CSS, Chakra UI, etc. ",
            image: "./kindmeal.png",
            tech: ["JavaScript", "React", "Chakra UI" ],
            project:"Individual Project",
            deploylink:"https://timely-crepe-c8bf70.netlify.app/",
            githublink:'https://github.com/H-unique245/Kindmeal-clone'
        },
        {
          name:"KFC clone",
          description:"Construct Week project of cloning KFC. This project is build by tech stacks using React, javascript, HTML, CSS, Chakra UI,Mogno DB, Node JS etc. ",
          image: "./KFC.jpg",
          tech: ["JavaScript", "React", "Chakra UI", "NodeJS", 'Exprees JS' ],
          project:"Group Project",
          deploylink:"https://axiomatic-trouble-8860-38bfe.web.app/",
          githublink:'https://github.com/H-unique245/axiomatic-trouble-8860'
      },
      {
        name:"Cronometer clone",
        description:"Cronometer nutrition tracking app provides you with everything you need to reach your health goals. It is a food journal that you keep daily.",
        image: `./cronometer.png`,
        tech: ["JavaScript", "React", "Chakra UI", "NodeJS", 'Exprees JS',"Mongo DB" ],
        project:"Group Project",
        deploylink:"https://fitfinity.vercel.app/",
        githublink:'https://github.com/furqan5921/evasive-stew-6265'
    }
    ]
    return (
      <section id="projects">

      <Box p={3} align="center" bgColor='#e5eaf5'  >
        
        <Heading align="center" w='40%' boxShadow={'md'} borderRadius='1vh' m={'auto'}  color='#12343b' > Projects</Heading>
        <Slider {...settings}>
            {
                projects.map((el)=>
                <div key={el.name}>
                <ProjectCard {...el} />
                </div>
                )
            }
        </Slider>
      </Box>
      </section>
    );
  }
