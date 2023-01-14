import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Image,
  Link,
  Flex,
} from "@chakra-ui/react";
// import {Link,useNavigate} from "react-router-dom";
import {BsGithub} from "react-icons/bs";
import {GrDeploy} from "react-icons/gr";


export default function ProjectCard({
  name,
  description,
  image,
  tech,
  project,
  deploylink,
  githublink,
}) {
  return (
    <Center py={6} px={3}>
      <Box
        maxW={"350px"}
        w={"full"}
        h={{base:'580px',md:'635px',lg:'60%'}}
        // border="2px solid yellow"
        bg={useColorModeValue("#e5eaf5", "gray.900")}
        boxShadow={"2xl"}
        rounded={"5%"}
        p={6}
        textAlign={"center"}
        m='auto'
      >
        <Image
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={"30vh"}
          src={image}
          alt={"Avatar Alt"}
          mb={4}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{project}
        </Text>
        <Text
          textAlign={"center"}
          color='black'
          h={{base:"32%",md:"37%",lg:"34.5%"}}
          // border="1px solid green"
          fontSize={{ base: 'md',md:"lg", lg: 'xl' }}
          // fontSize={{base:"12px",sm:"15px",md:"17px",lg:"16px"}}
          // maxH={'7rem'}
          px={2}
        >
          {description}
        </Text>
        <Box  h={{base:"15%",md:"20%",lg:"20%"}}m='auto'>
            <Flex flexWrap={'wrap'}  gap={2} h={{base:"40%",md:"40%",lg:"50%"}} /*border="1px solid red"*/ fontSize={{ base: 'sm',md:"md", lg: 'lg' }} justifyContent='center' alignItems={'center'} m='auto' mt={4} >
          {tech?.map((el) => (
            <Badge key={el} p={1} borderRadius='7px'   /*border="1px solid blue"*/ variant={'solid'} color="white" fontWeight={"400"}>
              {el}
            </Badge>
          ))}
        </Flex>
        <Stack h={{base:"40%",md:"40%",lg:"50%"}} m='auto' mt={10}  justifyContent={'center'} alignItems={'center'} direction={"row"} spacing={4}>
        <Link href = {deploylink } isExternal >
          <Button
            flex={1}
            fontSize={"sm"}
            bg={"#e5eaf5"}
            border="1px solid"
            rounded={"full"}
            leftIcon={<GrDeploy />}
            m='auto'
            _focus={{
              bg: "gray.200",
            }}
          >
            Live
          </Button>
          </Link>
          <Link href = {githublink } isExternal >
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"#12343b"}
            color={"white"}
            boxShadow={"xl"}
            leftIcon={<BsGithub />}
            _hover={{
              bg: "#e5eaf5",
              color:"black"
            }}
            m='auto'
            _focus={{
              bg: "#e5eaf5",
              
            }}
          >
            Source
          </Button>
          </Link>
        </Stack>
        </Box>
      </Box>
    </Center>
  );
}
