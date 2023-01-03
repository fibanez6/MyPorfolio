import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import * as yup from "yup";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const contactSchema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  message: yup.string().trim().required("Please enter a message"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm2 = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Flex bg="white" borderRadius="lg" p={4} align="center" justify="center">
      <Box color="#0B0E3F">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={contactSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={5} align="stretch">
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      size="md"
                      placeholder="Enter your name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      size="md"
                      placeholder="Enter your email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.message && touched.message}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    size="lg"
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="Hi Fernando, I would like..."
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                  />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <FormControl id="submit-btn">
                  <Button type="submit">Send Message</Button>
                </FormControl>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default ContactForm2;
