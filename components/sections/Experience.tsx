import { Box, Heading } from "@chakra-ui/react";
import Timeline from "../Timeline";
import { Section } from "./Section";

const ExperienceSection = () => {
  return (

    <Section
      className="section-experience"
      maxW={"full"}
    >
      <Box p={4}>
        <Box textAlign="center" pb={10} m="0 5rem">
          <Heading fontSize="3xl">Experience</Heading>
        </Box>
        <Timeline />
      </Box>
    </Section>

  );
};

export default ExperienceSection;
