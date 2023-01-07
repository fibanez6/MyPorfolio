"use client";

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
import { Section } from "../layout/Section";

interface FeatureProps {
  title: string;
  description: string;
  credentialId: string;
  date: string;
  image: string;
  link: string;
  alt: string;
  justifySelf: string;
  index: number;
}

const Feature = ({ title, description, credentialId, date, alt, image, link, justifySelf, index }: FeatureProps) => {
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
          <Text fontWeight={600}>{title}</Text>
          <Text fontWeight={600}>{description}</Text>
          <Text fontWeight={600}>Issued {date}</Text>
          <Text fontWeight={600}>Credential ID: {credentialId}</Text>
          <Link
            as={NextLink}
            href="https://aw.certmetrics.com/amazon/public/verification.aspx"
            variant={"solid"}
            isExternal
          >
            Show Credential<ExternalLinkIcon mx="5px" />
          </Link>
        </Stack>
      </Box>
    </motion.div>
  );
};

const CertificateSection = () => {
  return (
    <Section title="Certificates">
      <Flex alignItems="center" justifyContent="center" gap="10rem">
        <Feature
          title="AWS Certified Developer - Associate (DVA-C01)"
          description="Amazon Web Services (AWS)"
          credentialId="FXHJ72T1Q111Q3WY"
          image={"/media/AWS-Certified-Developer-Associate.png"}
          alt={"AWS Certified Developer Associate"}
          link="https://aw.certmetrics.com/amazon/public/verification.aspx"
          date={"August 2022"}
          justifySelf={"end"}
          index={1}
        />
        <Feature
          title="AWS Certified Solutions Architect - Associate (SAA-C02)"
          description="Amazon Web Services (AWS)"
          credentialId="MNW36P7BNEEQQPSW"
          image={"/media/AWS-Certified-Solutions-Architect-Associate.png"}
          alt={"AWS Certified Solutions Architect Associate"}
          date={"August 2022"}
          link="https://aw.certmetrics.com/amazon/public/verification.aspx"
          justifySelf={"start"}
          index={2}
        />
      </Flex>
    </Section>
  );
};

export default CertificateSection;
