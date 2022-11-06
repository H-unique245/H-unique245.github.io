import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";


// export default class Project extends Component {
//     render() {
export default function Project({ProjectRef}) {
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
            name:"Firefox-bikes clone",
            description:"Online platform to retail bicycles of firefox bikes, it is an ecommerce platform for bicycle lovers and explorers",
            image: `https://i.ibb.co/1qp2fyn/firefox.png`,
            tech: ["HTML" ,"CSS", "JavaScript"],
            project:"Group Project",
            deploylink:"https://capable-gecko-6d7ee1.netlify.app/",
            githublink:'https://github.com/shubham0709/firefox'
        },
        {
            name:"Shopbop clone",
            description:"Shopbop is the global retail application, basically it is an e-commerce website. In this project the tech stacks used are HTML, CSS, JavaScript.",
            image: "./shopbop.png",
            tech: ["HTML" ,"CSS", "JavaScript"],
            project:"Individual Project",
            deploylink:"https://capable-gecko-6d7ee1.netlify.app/",
            githublink:'https://github.com/shubham0709/firefox'
        },
        {
            name:"Kindmeal clone",
            description:"Construct Week project of cloning Kindmeal.my. This project is build by tech stacks using React, javascript, HTML, CSS, Chakra UI, etc. ",
            image: "./kindmeal.png",
            tech: ["JavaScript", "React", "Chakra UI" ],
            project:"Individual Project",
            deploylink:"https://capable-gecko-6d7ee1.netlify.app/",
            githublink:'https://github.com/shubham0709/firefox'
        }
    ]
    return (
      <Box p={3} align="center" ref={ProjectRef}>
        
        <Heading align="center" > Projects</Heading>
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
    );
  }
