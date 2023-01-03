import { Box, Container, Heading } from "@chakra-ui/react";
import Timeline from "../Timeline";

const ExperienceSection = () => {
  return (
    <Container
      as="section"
      className="section-experience"
      maxW={"6xl"}
      mt={0}
      p={{ sm: 5, md: 5, lg: 16 }}
      centerContent
      overflow="hidden"
    >
      <Box p={4} w="full">
        <Box maxW="full" textAlign="center" pb={10} m="0 5rem">
          <Heading fontSize="3xl">Experience</Heading>
        </Box>
        <Timeline />
      </Box>
    </Container>
  );
};

export default ExperienceSection;
