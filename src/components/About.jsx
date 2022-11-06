import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

function About({AboutRef}) {
  return (
    <Box bgColor={'purple.100'} p={4} ref={AboutRef} >
      <Heading align="center">About me</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} alignItems="center" p={5} >
     <Box align="left" m={4} mr={0}> <Text  w={{base:"90%",md:"80%"}} lineHeight={7} fontSize={{ base: 'md', lg: 'lg' }}>
        I am Hemant Balu Aher from Nashik, Maharashtra(INDIA). I completed my B.E.
        Mechanical from Pune University in 2021. I am pursuing Full Stack Web
        Development (FSWD) at Masai School. My father is a worker and my mother
        is a homemaker. I have three sisters who are older than me. I am
        interested in helping others with my skills.   
      </Text>
      </Box>
      <Image
            w={{base:"9rem",md:"16rem"}}
            alt={'profile Image'}
            align={{base:"center"}}
            rounded='full'
            objectFit={'cover'}
            src={
              'https://avatars.githubusercontent.com/u/101566293?v=4'
            }
          />
      </Stack>
    </Box>
  );
}

export default About;
