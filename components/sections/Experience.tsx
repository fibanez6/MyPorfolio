import { Box, Container, Heading } from "@chakra-ui/react";
import Accordion from "../Accordion";
import Timeline from "../Timeline";

const ExperienceSection = () => {
  return (
    <Container
      // maxW="full"
      maxW={'8xl'}
      mt={0}
      centerContent
      overflow="hidden"
      as="section"
      className="section-experience"
    >
      <Box p={4}>
        <Box
          maxW={"full"}
          textAlign={"center"}
          pb={10}
        >
          <Heading fontSize={"3xl"}>Experience</Heading>
        </Box>
        <Timeline />
      </Box>
    </Container>
  );
};

export default ExperienceSection;
