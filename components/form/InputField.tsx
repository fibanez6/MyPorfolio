import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";
import React, { ReactNode } from "react";


type InputFieldProps = FieldHookConfig<string> & {
  label: string;
  placeholder?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

export const InputField = ({
  label,
  placeholder,
  leftElement,
  rightElement,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(props);
  const hasError = Boolean(meta.touched && meta.error);

  const renderLeftElement = () => {
    if (leftElement)
      return <InputLeftElement
        pointerEvents="none">
        {leftElement}
      </InputLeftElement>;
  }

  const renderRightElement = () => {
    if (rightElement)
      return <InputRightElement
        pointerEvents="none"
      > {leftElement} </InputRightElement>;
  }

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
      <InputGroup borderColor="#E0E1E7">
        {renderLeftElement()}
        <Input id={field.name} placeholder={placeholder} {...field} />
        {renderRightElement()}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
