
import { Box, SimpleGrid, Text, Stack, Flex, Heading, Container, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import NextLink from 'next/link'

interface FeatureProps {
  date: string;
  image: string;
  alt: string;
  justifySelf: string
}

const Feature = ({ date, alt, image, justifySelf }: FeatureProps) => {
  return (
    <Box justifySelf={justifySelf}>
      <Stack align={'center'} justify={'center'} >
        <Flex mb={1}>
          <Image src={image} alt={alt} width={200} height={200} />
        </Flex>
        <Text fontWeight={600}>{date}</Text>
        <Link as={NextLink} href='#' variant={"solid"} isExternal>
          Show <ExternalLinkIcon mx='2px' />
        </Link>
      </Stack>

    </Box>
  );
};

const CertificateSection = () => {
  return (
    <section className='section-cert'>
      <Box p={4}>
        <Box spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} pb={10}>
          <Heading fontSize={'3xl'}>Certificates</Heading>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={100}>
          <Feature
            image={'/media/AWS-Certified-Developer-Associate.png'}
            alt={'AWS Certified Developer Associate'}
            date={'August 2022'}
            justifySelf={'end'}
          />
          <Feature
            image={'/media/AWS-Certified-Solutions-Architect-Associate.png'}
            alt={'AWS Certified Solutions Architect Associate'}
            date={'August 2022'}
            justifySelf={'start'}
          />
        </SimpleGrid>
      </Box>
    </section>
  )
}

export default CertificateSection;