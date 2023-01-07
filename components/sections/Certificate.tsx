"use client";

import {
  Box,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
  Link,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  VStack,
  Center,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";

interface FeatureProps {
  title: string;
  subtitle: string;
  description: string;
  credentialId: string;
  date: string;
  image: string;
  link: string;
  alt: string;
  index: number;
}

const Feature = ({
  title,
  subtitle,
  description,
  credentialId,
  date,
  alt,
  image,
  link,
  index,
}: FeatureProps) => {
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
      <Card align="center" justify={"center"} variant="unstyled">
        <CardHeader>
          <VStack>
            <Heading size={{ base: "md", sm: "sm", lg: "md" }}>{title}</Heading>
            <Heading as="h3" size={{ base: "md", sm: "xs", md: "sm" }}>
              {subtitle}
            </Heading>
          </VStack>
        </CardHeader>
        <CardBody pt="5" pb="5" gap="0.5rem">
          <VStack>
            <Image src={image} alt={alt} width={200} height={200} />
            <Text>{description}</Text>
          </VStack>
          <SimpleGrid
            columns={{ md: 1, lg: 2 }}
            pt="0.5rem"
            spacingX={{ sm: "0.2rem", lg: "0.5rem" }}
            spacingY={{ sm: "0.2rem", lg: "0.5rem" }}
          >
            <Text ml={{ sm: "0", lg: "3rem" }}>
              <strong>Issued:</strong>
            </Text>
            <Text>{date}</Text>
            <Text ml={{ sm: "0", lg: "3rem" }}>
              <strong>Credential ID:</strong>
            </Text>
            <Text>{credentialId}</Text>
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Link as={NextLink} href={link} variant={"solid"} isExternal>
            Show Credential <ExternalLinkIcon mx="5px" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const CertificateSection = () => {
  return (
    <Section title="Certificates">
      <Flex alignItems="center" justifyContent="center" gap="10rem">
        <Feature
          title="AWS Certified Developer"
          subtitle="Associate (DVA-C01)"
          description="Amazon Web Services (AWS)"
          credentialId="FXHJ72T1Q111Q3WY"
          image={"/media/AWS-Certified-Developer-Associate.png"}
          alt={"AWS Certified Developer Associate"}
          link="https://aw.certmetrics.com/amazon/public/verification.aspx"
          date={"August 2022"}
          index={1}
        />
        <Feature
          title="AWS Certified Solutions Architect"
          subtitle="Associate (SAA-C02)"
          description="Amazon Web Services (AWS)"
          credentialId="MNW36P7BNEEQQPSW"
          image={"/media/AWS-Certified-Solutions-Architect-Associate.png"}
          alt={"AWS Certified Solutions Architect Associate"}
          date={"August 2022"}
          link="https://aw.certmetrics.com/amazon/public/verification.aspx"
          index={2}
        />
      </Flex>
    </Section>
  );
};

export default CertificateSection;
