import {
  Card,
  CardBody,
  Button,
  ButtonGroup,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Box,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
function ProjectCard2({
  name,
  description,
  image,
  tech,
  project,
  deploylink,
  githublink,
}) {
  return (
    <Box>
      <Card
        m={4}
        bg="#e5eaf5"
        h={{ base: "560px", md: "560px", lg: "550px" }}
        textAlign={"center"}
        boxShadow={"2xl"}
        rounded={"5%"}
      >
        <CardBody
        // minH={'280px'}
          h="50%"
        >
          <Image
            // fit={"cover"}
            // align={"center"}
            // w={"100%"}
            // h={{ base: "30vh", md: "30vh", lg: "32vh" }}
            src={image}
            alt={name}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text
              //   border="1px solid blue"
              fontWeight={600}
              color={"gray.500"}
              mb={4}
            >
              @{project}
            </Text>
            <Text
              //   border="1px solid green"
              textAlign={"justify"}
              h={"40%"}
            >
              {description}
            </Text>
            <SimpleGrid columns={[2, 3, 2, 3]} spacing="10px">
              {tech.map((el) => (
                <Badge
                  key={el}
                  p={1}
                  variant={"solid"}
                  borderRadius="7px"
                  color="white"
                  fontWeight={"400"}
                  textAlign={"center"}
                >
                  {el}
                </Badge>
              ))}
            </SimpleGrid>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter
          //   border="1px solid red"
           m="auto"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ButtonGroup spacing={{base:8,md:10,lg:10}} >
            <Link href={deploylink} isExternal>
              <Button
                flex={1}
                fontSize={"sm"}
                bg={"#e5eaf5"}
                rounded={"full"}
                leftIcon={<GrDeploy />}
                m="auto"
                mt={4}
                _hover={{
                    border: "1px solid",
                  }}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Live
              </Button>
            </Link>
            <Link href={githublink} isExternal>
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
                  color: "black",
                }}
                m="auto"
                mt={4}
                _focus={{
                  bg: "#e5eaf5",
                }}
              >
                Source
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default ProjectCard2;
