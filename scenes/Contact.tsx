'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import ContactForm from 'components/ContactForm';
import { Section } from 'components/layout/Section';
import profileData from 'content/profile-data.json';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const ICON_MAP: { [name in string]: ReactElement } = {
  linkedin: <BsLinkedin size="28px" />,
  github: <BsGithub size="28px" />,
  twitter: <BsTwitter size="28px" />,
  instagram: <BsInstagram size="28px" />
};

const Contact = (): ReactElement => {
  const { social, email, location } = profileData.contact;
  const bgColor = useColorModeValue('primary.70', 'gray.500');
  const contactColor = useColorModeValue('gray.50', 'gray.500');
  const subtitleColor = useColorModeValue('primary.700', 'secundary.600');
  const IconColor = useColorModeValue('#1970F1', 'gray.900');
  const socialColor = useColorModeValue('#0D74FF', 'gray.900');
  const formTextColor = useColorModeValue('#0B0E3F', 'gray.900');

  return (
    <Section id="contact" className="section-contact">
      <Flex
        bg={bgColor}
        w="100%"
        borderRadius="lg"
        px={{ base: 4, md: 10 }}
        py={10}
        gap={10}
        color={contactColor}
        flexWrap="wrap"
      >
        <VStack flex="1 1 0">
          <Heading>Get in Touch</Heading>
          <Text mt={{ sm: 3, md: 3, lg: 5 }} color={subtitleColor}>
            Fill up the form below to contact
          </Text>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack pl={0} spacing={3} alignItems="flex-start">
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                _hover={{ border: '2px solid #1C6FEB' }}
                leftIcon={<MdEmail color={IconColor} size="20px" />}
              >
                {email}
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                leftIcon={<MdLocationOn color={IconColor} size="20px" />}
              >
                {location}
              </Button>
            </VStack>
          </Box>
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            alignItems="flex-start"
          >
            {social.map((s) => {
              return (
                <Link
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label={s.name}
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: socialColor }}
                    icon={ICON_MAP[s.name]}
                  />
                </Link>
              );
            })}
          </HStack>
        </VStack>
        <VStack
          flex="1 1 auto"
          minW={{ base: 'auto', sm: '27rem', md: '35rem' }}
        >
          <Box bg="white" borderRadius="lg" p={8} w="full">
            <Box color={formTextColor}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <ContactForm />
              </motion.div>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Section>
  );
};

export default Contact;
