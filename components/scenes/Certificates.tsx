'use client';

import {
  Card,
  CardBody,
  Center,
  Flex,
  Link,
  SimpleGrid
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
        <CardBody pt="5" pb="5">
          <Center>
            <Link as={NextLink} href={link} isExternal>
              <Image src={image} alt={alt} width={200} height={200} />
            </Link>
          </Center>
          <SimpleGrid
            className="info-table"
            columns={{ base: 1, lg: 2 }}
            justifyItems="center"
            pt="0.5rem"
            spacingX={{ sm: '0rem', lg: '0.2rem' }}
            spacingY={{ sm: '0rem', lg: '0.2rem' }}
            gridTemplateAreas={{
              base: `"a"
              "b"
              "c"
              "d"`,
              lg: `"a b"
              "c d"`
            }}
          ></SimpleGrid>
        </CardBody>
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
