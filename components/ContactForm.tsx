'use client';

import { Flex, FormControl, Spacer, VStack } from '@chakra-ui/react';
import { InputField } from 'components/form/InputField';
import { SubmitButtom } from 'components/form/SubmitButtom';
import { TextAreaField } from 'components/form/TextAreaField';
import type { FormikHelpers } from 'formik';
import { Formik } from 'formik';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import type { ContactFormProps } from 'types/components/form';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  message: ''
};

const contactSchema = yup.object().shape({
  name: yup.string().required('Please enter a name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  message: yup.string().trim().required('Please enter a message')
});

const ContactForm = (): ReactElement => {
  const [isSuccess, setSuccess] = useState<boolean | undefined>();

  const handleFormSubmit = async (
    formData: ContactFormProps,
    { setStatus, resetForm }: FormikHelpers<any>
  ): Promise<void> => {
    const resp = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const response = await resp.json();
    console.log(response);

    setSuccess(resp.ok);
    setStatus({ message: response });
    resetForm();

    setTimeout(() => {
      setSuccess(undefined);
    }, 5000);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={contactSchema}
      validateOnMount={true}
    >
      {({ values, isValid, isSubmitting, handleSubmit }) => (
        <form name="contact" onSubmit={handleSubmit}>
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
            <p className="hidden" hidden={true}>
              <label>
                <input name="bot-field" />
              </label>
            </p>
            <Flex justifyContent="flex-end">
              <Spacer />
              <FormControl id="submit-btn" mr="auto" w="auto">
                <SubmitButtom
                  label="Send"
                  dodge={!isValid}
                  isSuccess={isSuccess}
                  isLoading={isSubmitting}
                />
              </FormControl>
            </Flex>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
