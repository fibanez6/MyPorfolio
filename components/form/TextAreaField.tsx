import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea
} from '@chakra-ui/react';
import { useField } from 'formik';
import type { ReactElement } from 'react';
import React from 'react';
import type { TextAreaFieldProps } from 'types/components/form';

export const TextAreaField = ({
  label,
  placeholder,
  ...props
}: TextAreaFieldProps): ReactElement => {
  const [field, meta] = useField(props);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <FormControl isInvalid={hasError}>
      <FormLabel
        htmlFor={field.name}
        fontWeight="bold"
        fontSize="md"
        textTransform="capitalize"
      >
        {label}
      </FormLabel>
      <Textarea id={field.name} placeholder={placeholder} {...field} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
