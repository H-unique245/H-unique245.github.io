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
  ];
  return (
    <VStack id="skills"
      p={5}
      bgColor='#e5eaf5'
      textAlign={"center"}
      fontFamily="Montserrat"
    >
        <Heading align="center" w='40%' boxShadow={'md'} borderRadius='1vh' m={'auto'}  color='#12343b'>Skills </Heading>
{/*  */}
      <SimpleGrid columns={{base:2,sm:2,md:4,lg:6}} spacing="40px">
        {skills.map((el) => {
          return <SkillCard key={el.title} image={el.image} title={el.title} />;
        })}
      </SimpleGrid>
    </VStack>
  );
}

export default Skills;
