import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
  Link,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";

interface FeatureProps {
  date: string;
  image: string;
  alt: string;
  justifySelf: string;
}

const Feature = ({ date, alt, image, justifySelf }: FeatureProps) => {
  return (
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
  );
};

const CertificateSection = () => {
  return (
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
          />
          <Feature
            image={"/media/AWS-Certified-Solutions-Architect-Associate.png"}
            alt={"AWS Certified Solutions Architect Associate"}
            date={"August 2022"}
            justifySelf={"start"}
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default CertificateSection;
