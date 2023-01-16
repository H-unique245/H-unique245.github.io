import { Box, Image } from "@chakra-ui/react";

const SkillCard = ({ image, title }) => {
    return (
      <Box  boxShadow='xl' shadow={'dark-lg'} borderRadius='lg' m={{base:3,md:3,lg:5}} mb={{base:4,md:4,lg:5}} p={{base:1,md:2,lg:2}}>
          <Image w={{base:'10vh',md:'14vh',lg:'20vh'}} h={{base:'10vh',md:'14vh',lg:'20vh'}} m='auto' src={image} alt={title}/>
          <Box fontSize={{base:'md',sm:'sm',md:'lg',lg:'xl'}} fontWeight= {700} color='orange.400' >{title}</Box>
        </Box>
    );
  };
  export { SkillCard };
  