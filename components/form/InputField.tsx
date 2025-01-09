import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react';
import { useField } from 'formik';
import type { ReactElement } from 'react';
import React from 'react';
import type { InputFieldProps } from 'types/components/form';

export const InputField = ({
  label,
  placeholder,
  leftElement,
  rightElement,
  ...props
}: InputFieldProps): ReactElement => {
  const [field, meta] = useField(props);
  const hasError = Boolean(meta.touched && meta.error);
  const borderColor = useColorModeValue('inherit', 'gray.400');

  const renderLeftElement = (): ReactElement => (
    <InputLeftElement pointerEvents="none">{leftElement}</InputLeftElement>
  );

  const renderRightElement = (): ReactElement => (
    <InputRightElement pointerEvents="none">{rightElement}</InputRightElement>
  );

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
      <InputGroup borderColor={borderColor}>
        {leftElement && renderLeftElement()}
        <Input id={field.name} placeholder={placeholder} {...field} />
        {rightElement && renderRightElement()}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
