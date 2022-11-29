import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <section id="about">
    <Box  p={4} >
      <Heading align="center">About me</Heading>
      <Stack direction={{ base: 'column', md: 'row' }}spacing={4} alignItems="center" p={{base:7,md:19}} >
    <Box>  <Image
            w={{base:"9rem",md:"46rem"}}
            alt={'profile Image'}
            align={{base:"center"}}
            rounded='full'
            objectFit={'cover'}
            src={
              '/about.png'
            }
          />
          </Box>
     <Box alignItems="center" textAlign={'justify'}  m={{base:1,md:'auto'}} > <Text  w={{base:"95%",md:"90%"}} m='auto' lineHeight={1.3} fontSize={{ base: 'md',md:"lg", lg: '2xl' }} color={'black.500'}>
        I am Hemant Balu Aher from Nashik, Maharashtra(INDIA). I completed my B.E.
        Mechanical from Pune University in 2021. I am pursuing Full Stack Web
        Development (FSWD) at Masai School. My father is a worker and my mother
        is a homemaker. I have three sisters who are older than me. I am
        interested in helping others with my skills.   
      </Text>
      </Box>
      </Stack>
    </Box>
    </section>
  );
}

export default About;
