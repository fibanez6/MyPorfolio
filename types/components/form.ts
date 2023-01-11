import { ButtonProps } from "@chakra-ui/react";
import { FieldHookConfig } from "formik";
import { ReactNode } from "react";

export interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

export type InputFieldProps = FieldHookConfig<string> & {
  label: string;
  placeholder?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

export type TextAreaFieldProps = FieldHookConfig<string> & {
  label: string;
  placeholder?: string;
};

export type SubmitButtomProps = ButtonProps & {
  label: string;
  dodge?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
};

export type Position = {
  x: number | undefined;
  y: number | undefined;
};
