import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
// import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      // {
      //   breakpoint: 640,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 576,
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
            description:"It is an e-commerce shopping application where we can buy clothes & other essentials with different categories.",
            image: "./shopbop.png",
            tech: ["HTML" ,"CSS", "JavaScript"],
            project:"Individual Project",
            deploylink:"https://beautiful-cendol-f856f5.netlify.app/",
            githublink:'https://github.com/H-unique245/Shopbp'
        },
        {
            name:"Kindmeal clone",
            description:"Kindemeal is a Malaysian product base platform, where we can check the food products & restaurants for the same.",
            image: "./kindmeal.png",
            tech: ["JavaScript", "React", "Chakra UI" ],
            project:"Individual Project",
            deploylink:"https://timely-crepe-c8bf70.netlify.app/",
            githublink:'https://github.com/H-unique245/Kindmeal-clone'
        },
        {
          name:"KFC clone",
          description:"KFC is an American fast-food restaurant application that specializes in fried chicken",
          image: "./KFC.jpg",
          tech: ["JavaScript", "React JS", "NodeJS", "Chakra UI", 'Express JS' ],
          project:"Group Project",
          deploylink:"https://axiomatic-trouble-8860-38bfe.web.app/",
          githublink:'https://github.com/H-unique245/axiomatic-trouble-8860'
      },
      {
        name:"Fitfinity",
        description:"Cronometer nutrition tracking app provides you with everything you need to reach your health goals.",
        image: `./cronometer.png`,
        tech: ["JavaScript", "React JS", "Node JS","Mongo DB", 'Express JS' ],
        project:"Group Project",
        deploylink:"https://fitfinity.vercel.app/",
        githublink:'https://github.com/furqan5921/evasive-stew-6265'
    }
    ]
    return (
      <section id="projects">

      <Box align="center" bgColor='#e5eaf5'  >
        
        <Heading align="center" w='40%' boxShadow={'md'} fontSize={{base:'24px',sm:'28px',md:'36px'}} borderRadius='1vh'  color='#12343b' p={1} > Projects</Heading>
        <Slider {...settings}>
            {
                projects.map((el)=>
                <div key={el.name}>
                <ProjectCard2 key={el.name} {...el} />
               </div>
                )
            }
        </Slider>
      </Box>
      </section>
    );
  }
