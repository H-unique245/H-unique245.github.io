import {  Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { SkillCard } from "./SkillCard";

function Skills() {
  const skills = [
    {
      title: "HTML",
      image: "/html.svg",
    },
    {
      title: "CSS",
      image: "/css.svg",
    },
    {
      title: "Javascript",
      image: "/javascript.svg",
    },
    {
      title: "REACT",
      image: "/react.svg",
    },

    {
      title: "REDUX",
      image: "/redux.svg",
    },
    {
      title: "CHAKRA UI",
      image: "/chakraui.svg",
    },
    {
      title: "Git Hub",
      image: "/github.svg",
    },
    {
      title: "Mongo DB",
      image: "/mongodb.svg",
    },
    {
      title: "Node JS",
      image: "/node.svg",
    },
    {
      title: "Express JS",
      image: "/express.svg",
    },
    {
      title: "Next JS",
      image: "/nextjs.svg",
    },
    {
      title: "Typescript",
      image: "/typescript.svg",
    },
    {
      title: "NPM",
      image: "/npm.svg",
    },
    {
      title: "Postman",
      image: "/postman.svg",
    }
  ];
  return (
    <VStack id="skills"
      p={4}
      bgColor='#e5eaf5'
      textAlign={"center"}
      fontFamily="Montserrat"
    >
        <Heading align="center" w='35%' fontSize={{base:'24px',sm:'28px',md:'36px'}} boxShadow={'md'} borderRadius='1vh' m={'auto'} p={2} color='#12343b'>Skills </Heading>
{/*  */}
      <SimpleGrid columns={[2,3,4,6]} spacing={[1,1,2,2]}>
        {skills.map((el) => {
          return <SkillCard key={el.title} image={el.image} title={el.title} />;
        })}
      </SimpleGrid>
    </VStack>
  );
}

export default Skills;
