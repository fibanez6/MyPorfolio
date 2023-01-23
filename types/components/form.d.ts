import type { ButtonProps } from '@chakra-ui/react';
import type { FieldHookConfig } from 'formik';
import type { ReactNode } from 'react';

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

export interface Position {
  x: number | undefined;
  y: number | undefined;
}
