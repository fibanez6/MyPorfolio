import { Formik } from "formik";
import { Box, Button, FormControl, VStack, HStack, Flex, Spacer } from "@chakra-ui/react";
import * as yup from "yup";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { InputField } from "./form/InputField";
import { TextAreaField } from "./form/TextAreaField";

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

const ContactForm = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={contactSchema}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={5} align="stretch">
            <InputField
              label="Your Name"
              name="name"
              placeholder="Enter your name"
              leftElement={<BsPerson color="gray.800" />}
            />
            <InputField
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
              leftElement={<MdOutlineEmail color="gray.800" />}
            />
            <TextAreaField
              label="Message"
              name="message"
              placeholder="Hi Fernando, I would like..."
              value={values.name}
            />
            <Flex justifyContent="flex-end">
              <Spacer />
              <FormControl id="submit-btn" mr="auto" w="auto">
                <Button type="submit">
                  Send Message
                </Button>
              </FormControl>
            </Flex>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
