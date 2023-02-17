import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

function About() {
  return (
    <section id="about">
      <Box p={4} bgColor="#e5eaf5">
        <Heading
          align="center"
          w="35%"
          boxShadow={"md"}
          fontSize={{ base: "24px", sm: "28px", md: "36px" }}
          borderRadius="1vh"
          m={"auto"}
          p={2}
          color="#12343b"
        >
          About me
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          p={{ base: 7, md: 25 }}
        >
          <Box>
            {" "}
            <Image
              w={{ base: "9rem", md: "25rem" }}
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
            <UnorderedList marginLeft="2.5rem">
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
                  I am Hemant Balu Aher, a Full Stack Web Developer from Nashik,
                  Maharashtra with a B.E. in Mechanical Engineering from Pune
                  University.
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
                  {" "}
                  I dedicated over 1,200 hours to coding and 1,000 hours to data
                  structures and algorithms at Masai School. I have developed
                  projects using the MERN stack and possess expertise in tech
                  stacks like HTML, CSS, JS, React, Redux, NodeJS, and MongoDB.
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
                  I love to explore new technologies and leverage them to solve
                  real-life problems. My passion lies in using my skills to
                  support others.
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
