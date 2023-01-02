import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

const ContactSection = () => {
  return (
    <Container
      as="section"
      className="section-contact"
      maxW={"6xl"}
      mt={0}
      centerContent
      overflow="hidden"
    >
      {/* <Container bg={useColorModeValue('#9DC4FB', 'gray.900')} maxW="full" mt={0} centerContent overflow="hidden"> */}
      <Box
        bg={useColorModeValue("#9DC4FB", "gray.900")}
        w="full"
        mt={0}
        overflow="hidden"
        borderRadius="lg"
        m={{ base: 10, sm: 5, md: 16, lg: 10 }}
        p={{ base: 5, sm: 5, md: 5, lg: 10 }}
        color="white"
      >

        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 10, xl: 20 }} className="ul-style">
          <WrapItem>
            <Box>
              <Heading>Get in Touch</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                Fill up the form below to contact
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    // color="#DCE2FF"
                    _hover={{ border: "2px solid #1C6FEB" }}
                    leftIcon={<MdEmail color="#1970F1" size="20px" />}
                  >
                    fibanez84@gmail.com
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    // color="#DCE2FF"
                    // _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                  >
                    Melbourne, Australia
                  </Button>
                </VStack>
              </Box>
              <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={5}
                px={5}
                alignItems="flex-start"
              >
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#0D74FF" }}
                  icon={<BsLinkedin size="28px" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#0D74FF" }}
                  icon={<BsGithub size="28px" />}
                />
                <IconButton
                  aria-label="twitter"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#0D74FF" }}
                  icon={<BsTwitter size="28px" />}
                />
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#0D74FF" }}
                  icon={<BsInstagram size="28px" />}
                />
              </HStack>
            </Box>
          </WrapItem >
          <WrapItem w={{ base: '100%', lg: '59%' }}>
            <Box bg="white" borderRadius="lg" w="full">
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="email" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button>Send Message</Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>

      </Box>
    </Container>
  );
};

export default ContactSection;
