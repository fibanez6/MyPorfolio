import {
  Box,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";

interface FeatureProps {
  date: string;
  image: string;
  alt: string;
  justifySelf: string;
  index: number;
}

const Feature = ({ date, alt, image, justifySelf, index }: FeatureProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.3, duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <Box justifySelf={justifySelf}>
        <Stack align={"center"} justify={"center"}>
          <Flex mb={1}>
            <Image src={image} alt={alt} width={200} height={200} />
          </Flex>
          <Text fontWeight={600}>{date}</Text>
          <Link as={NextLink} href="#" variant={"solid"} isExternal>
            Show <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Box>
    </motion.div>
  );
};

const CertificateSection = () => {
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
      <Container as="section" className="section-cert" maxW={"6xl"}>
        <Box p={4}>
          <Box
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            pb={10}
          >
            <Heading fontSize={"3xl"}>Certificates</Heading>
          </Box>
          <Flex alignItems="center" justifyContent="center" gap={100}>
            <Feature
              image={"/media/AWS-Certified-Developer-Associate.png"}
              alt={"AWS Certified Developer Associate"}
              date={"August 2022"}
              justifySelf={"end"}
              index={1}
            />
            <Feature
              image={"/media/AWS-Certified-Solutions-Architect-Associate.png"}
              alt={"AWS Certified Solutions Architect Associate"}
              date={"August 2022"}
              justifySelf={"start"}
              index={2}
            />
          </Flex>
        </Box>
      </Container>
    </motion.div>
  );
};

export default CertificateSection;
