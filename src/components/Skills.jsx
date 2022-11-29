import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
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
      bgColor="purple.100"
      textAlign={"center"}
      fontFamily="Montserrat"
    >
      <Box alignItems="center">
        <Heading alignSelf={'center'}>Skills </Heading>
      </Box>

      <SimpleGrid columns={[2, 3, 5]} spacing="40px">
        {skills.map((el) => {
          return <SkillCard key={el.title} image={el.image} title={el.title} />;
        })}
      </SimpleGrid>
    </VStack>
  );
}

export default Skills;
