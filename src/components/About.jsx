import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Box bgColor={'purple.100'} p={4} >
      <Heading align="center">About me</Heading>
     <Box align="center" m={4}> <Text  w="60%" lineHeight={7}>
        I am Hemant Balu Aher from Nashik, Maharashtra. I completed my B.E.
        Mechanical from Pune University in 2021. I am pursuing Full Stack Web
        Development (FSWD) at Masai School. My father is a worker and my mother
        is a homemaker. I have three sisters who are older than me. I am
        interested in helping others with my skills.
      </Text>
      </Box>
    </Box>
  );
}

export default About;
