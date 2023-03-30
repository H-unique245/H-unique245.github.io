import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
// import Slider from "react-slick";
// import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class Project extends Component {
//     render() {
export default function Project() {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 860,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     // {
  //     //   breakpoint: 640,
  //     //   settings: {
  //     //     slidesToShow: 2,
  //     //     slidesToScroll: 2
  //     //   }
  //     // },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const projects = [
    {
      name: "Fitfinity",
      description:
        "Cronometer nutrition tracking app provides you with everything you need to reach your health goals.",
      image: `./cronometer.png`,
      tech: ["JavaScript", "React JS", "Node JS", "Mongo DB", "Express JS"],
      project: "Group Project",
      deploylink: "https://fitfinity.vercel.app/",
      githublink: "https://github.com/furqan5921/evasive-stew-6265",
    },
    {
      name: "KFC clone",
      description:
        "KFC is an American fast-food restaurant application that specializes in fried chicken",
      image: "./KFC.jpg",
      tech: ["JavaScript", "React JS", "NodeJS", "Chakra UI", "Express JS"],
      project: "Group Project",
      deploylink: "https://axiomatic-trouble-8860-38bfe.web.app/",
      githublink: "https://github.com/H-unique245/axiomatic-trouble-8860",
    },
    {
      name: "School Management System",
      description:
        "This is a competitive application created for the Masai Hackathon program. This SAAS web application is all about education platforms.",
      image: "./mindinstallers.png",
      tech: [
        "JavaScript",
        "React",
        "Next JS",
        "Chakra UI",
        "Node JS",
        "Mongo DB",
      ],
      project: "Group Project",
      deploylink: "https://hackathon-sms.vercel.app/",
      githublink: "https://github.com/H-unique245/MindInstallers",
    },
    {
      name: "Kindmeal clone",
      description:
        "Kindemeal is a Malaysian product base platform, where we can check the food products & restaurants for the same.",
      image: "./kindmeal.png",
      tech: ["JavaScript", "React", "Chakra UI"],
      project: "Individual Project",
      deploylink: "https://timely-crepe-c8bf70.netlify.app/",
      githublink: "https://github.com/H-unique245/Kindmeal-clone",
    },

    {
      name: "Ssense clone",
      description:
        "It is an e-commerce shopping application where we can buy clothes & other essentials with different categories.",
      image: "./ssense.png",
      tech: ["HTML", "CSS", "JavaScript", "React", "Chakra UI"],
      project: "Individual Project",
      deploylink: "https://ssense-clone-ten.vercel.app/",
      githublink: "https://github.com/H-unique245/ssense-clone",
    },
  ];
  return (
    <section id="projects">
      <Box align="center" bgColor="#e5eaf5">
        <Heading
          align="center"
          w="35%"
          boxShadow={"md"}
          fontSize={{ base: "24px", sm: "28px", md: "36px" }}
          borderRadius="1vh"
          color="#12343b"
          p={2}
        >
          {" "}
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2, 3]} spacing="40px">
          {projects.map((el) => (
            <ProjectCard2 key={el.name} {...el} />
          ))}
        </SimpleGrid>
      </Box>
    </section>
  );
}
