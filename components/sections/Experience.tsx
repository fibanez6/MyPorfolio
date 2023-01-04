import { Box, Container, Heading } from "@chakra-ui/react";
import Timeline from "../Timeline";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
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
    </motion.div>
  );
};

export default ExperienceSection;
