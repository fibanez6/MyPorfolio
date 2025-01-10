'use client';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import { CERTIFICATES } from 'content/profile-data';
import { motion } from 'motion/react';
import Image from 'next/image';
import NextLink from 'next/link';
import type { ReactElement } from 'react';
import type { CertProps } from 'types/components/scenes/certificate';

const Certificate = ({
  title,
  subtitle,
  credentialId,
  date,
  alt,
  image,
  link,
  index
}: CertProps): ReactElement => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.3, duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      }}
    >
      <Card
        className="card"
        align="center"
        justify={'center'}
        variant="unstyled"
        minW="10rem"
      >
        <CardHeader>
          <VStack>
            <Heading size={{ base: 'md', sm: 'sm', lg: 'md' }}>{title}</Heading>
            <Heading as="h3" size={{ base: 'md', sm: 'xs', md: 'sm' }}>
              {subtitle}
            </Heading>
          </VStack>
        </CardHeader>
        <CardBody pt="5" pb="5" gap="0.5rem">
          <Center>
            <Image src={image} alt={alt} width={200} height={200} />
          </Center>
          <SimpleGrid
            className="info-table"
            columns={{ base: 1, lg: 2 }}
            justifyItems="center"
            pt="0.5rem"
            spacingX={{ sm: '0.2rem', lg: '0.2rem' }}
            spacingY={{ sm: '0.2rem', lg: '0.2rem' }}
            gridTemplateAreas={{
              base: `"a"
              "b"
              "c"
              "d"`,
              lg: `"a b"
              "c d"`
            }}
          >
            <Text gridArea="a">
              <strong>Issued:</strong>
            </Text>
            <Text gridArea={{ md: 'b', lg: 'c' }}>{date}</Text>
            <Text gridArea={{ md: 'c', lg: 'b' }}>
              <strong>Credential ID:</strong>
            </Text>
            <Text gridArea="d">{credentialId}</Text>
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Link as={NextLink} href={link} variant={'solid'} isExternal>
            Show Credential <ExternalLinkIcon mx="5px" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Certificates = (): ReactElement => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap={'wrap'}
      gap={{ base: '5rem', sm: '7rem', md: '7rem', lg: '5rem' }}
    >
      {CERTIFICATES.map((e, index) => {
        return <Certificate key={index} index={index} {...e} />;
      })}
    </Flex>
  );
};

export default Certificates;
