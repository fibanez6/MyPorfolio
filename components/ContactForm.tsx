import { Formik } from "formik";
import { FormControl, VStack, Flex, Spacer } from "@chakra-ui/react";
import * as yup from "yup";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { InputField } from "./form/InputField";
import { TextAreaField } from "./form/TextAreaField";
import { SubmitButtom } from "./form/SubmitButtom";
import emailjs from '@emailjs/browser';

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
  const handleFormSubmit = async (formData) => {
    console.log(formData);

    // var templateParams = {
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message
    // };
    // emailjs.send(
    //   'service_8hxelho',
    //   'template_f7ff84i',
    //   templateParams,
    //   'jwXveudue6-_s90R1')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, (err) => {
    //     console.log('FAILED...', err);
    //   });

    const resp = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const response = await resp.json();
    console.log(response);
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={contactSchema}
      validateOnMount={true}
    >
      {({ values, isValid, handleSubmit }) => (
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
                <SubmitButtom label="Send" disabled={!isValid} />
              </FormControl>
            </Flex>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
