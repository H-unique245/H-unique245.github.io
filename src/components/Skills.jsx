import { Box, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";

function Skills() {
  return (
    <VStack  p={5} bgColor='purple.100' textAlign={'center'} fontFamily='Montserrat'>
      <Box alignItems='center'>
        <Heading >Skills </Heading>
      </Box>
      {/* max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; */}

      <HStack m='auto' display={'flex'} flexWrap='wrap'  spacing={10} justifyContent={'space-evenly'} maxWidth='1100px'>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/html.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >HTML</Box>
        </Box>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/css.svg" alt="css" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >CSS</Box>
        </Box>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/javascript.svg" alt="js" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >Javascript</Box>
        </Box >
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/react.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >React</Box>
        </Box>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/redux.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >Redux</Box>
        </Box>

        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/github.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >Github</Box>
        </Box>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/mongodb.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >Mongodb</Box>
        </Box>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/express.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >Express js</Box>
        </Box>
        <Box boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={5} p={2}>
          <Image w={'20vh'} h={'20vh'} src="/node.svg" alt="html" />
          <Box fontSize={'md'} fontWeight= {700} color='orange.400' >Node js</Box>
        </Box>
      </HStack>
    </VStack>
  );
}

export default Skills;