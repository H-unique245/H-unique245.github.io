import { Box, Heading, Stack, Image, Text, List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import {BsPersonCheckFill} from "react-icons/bs";

function About() {
  return (
    <section id="about">
      <Box p={4} bgColor="#e5eaf5">
        <Heading
          align="center"
          w="40%"
          boxShadow={"md"}
          fontSize={{ base: "24px", sm: "28px", md: "36px" }}
          borderRadius="1vh"
          m={"auto"}
          color="#12343b"
        >
          About me
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          p={{ base: 7, md: 19 }}
        >
          <Box>
            {" "}
            <Image
              w={{ base: "9rem", md: "40rem" }}
              alt={"profile Image"}
              align={{ base: "center" }}
              rounded="full"
              objectFit={"cover"}
              src={"/about.png"}
            />
          </Box>
          <Box
            alignItems="center"
            textAlign={"justify"}
            m={{ base: 1, md: "auto" }}
          >
            {" "}
            <UnorderedList marginLeft='2.5rem'>
              <ListItem>
            <Text
              w={{ base: "95%", md: "90%" }}
              m="auto"
              ml={0}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={400}
              lineHeight={"1.7"}
              color={"black.500"}
            >
              Aspiring full-stack web developer with hands-on experience in
              projects built on the MERN stack. 
            </Text>
              </ListItem>
              <ListItem>
            <Text
              w={{ base: "95%", md: "90%" }}
              m="auto"
              ml={0}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={400}
              lineHeight={"1.7"}
              color={"black.500"}
            >Collaborative team player who is
              proficient in working with interdisciplinary teams and executing
              goal oriented projects.
            </Text>
              </ListItem>
              <ListItem>
            <Text
              w={{ base: "95%", md: "90%" }}
              m="auto"
              ml={0}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={400}
              lineHeight={"1.7"}
              color={"black.500"}
            >
              Aspiring full-stack web developer with hands-on experience in
              projects built on the MERN stack. Collaborative team player who is
              proficient in working with interdisciplinary teams and executing
              goal oriented projects.
            </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>
    </section>
  );
}

export default About;
