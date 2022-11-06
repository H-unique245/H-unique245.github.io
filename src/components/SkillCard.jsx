import { HStack } from "@chakra-ui/react";

const SkillCard = ({ name, title }) => {
    return (
      <HStack>
        <h1 style={{ margin: "0", padding: "0" }}>{name}</h1>
        <h3 style={{ margin: "0", padding: "0" }}>{title}</h3>
      </HStack>
    );
  };
  export { SkillCard };
  