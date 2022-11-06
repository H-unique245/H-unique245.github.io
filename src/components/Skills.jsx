import {
  Box,
//   Container,
  Heading,
//   HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles from "./Skills.module.css";

const Skills = () => {
  const data = [
    {
      icon: "./html.png",
      desc: "HTML",
    },
    {
      icon: "./css.png",
      desc: "CSS",
    },
    {
      icon: "./javascript.png",
      desc: "JavaScript",
    },
    {
      icon: "./react.png",
      desc: "ReactJs",
    },
    {
      icon: "./node.png",
      desc: "Node JS",
    },
    {
      icon: "./express.png",
      desc: "Express JS",
    },
    {
      icon: "./mongo.png",
      desc: "Mongo DB",
    },
    {
      icon: "./redux.png",
      desc: "Redux",
    },
    {
      icon: "./typescript.png",
      desc: "Typescript",
    },
    {
      icon: "./next.png",
      desc: "Next JS",
    },
  ];
  return (
    <section id="skills">


    <Box bgColor={"telegram.100"} p={3} m={2}>
      <Heading align="center">Skills</Heading>
      <Stack>
        {/* <HStack alignSelf={"center"}> */}
        <SimpleGrid
          columns={[3, null, 5]}
          spacingX={{ base: "10px", lg: "40px" }}
          spacingY="20px"
        >
          {data.map((item) => (
            <VStack className={styles.skills} key={item.desc}>
              <Box>
                <Image
                  w={{ base: "50px", md: "140px" }}
                  h={{ base: "50px", md: "120px" }}
                  src={item.icon}
                  alt={item.desc}
                />
              </Box>
              <Text fontSize={{ base: "sm", lg: "lg" }}> {item.desc}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        {/* </HStack> */}
      </Stack>
    </Box>
    </section>
  );
};
export default Skills;
