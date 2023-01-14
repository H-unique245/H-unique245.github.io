import { Box, Image } from "@chakra-ui/react";

const SkillCard = ({ image, title }) => {
    return (
      <Box  boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={{base:4,md:3,lg:5}} mb={{base:4,md:4,lg:5}} p={{base:1,md:1,lg:2}}>
          <Image w={{base:'10vh',md:'15vh',lg:'20vh'}} h={{base:'10vh',md:'15vh',lg:'20vh'}} m='auto' src={image} alt={title}/>
          <Box fontSize={{base:'sm',sm:'sm',md:'md'}} fontWeight= {700} color='orange.400' >{title}</Box>
        </Box>
    );
  };
  export { SkillCard };
  