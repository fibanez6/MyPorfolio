"use client";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme/theme";
import { GTagManager } from "components/google/GTagManager";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <GTagManager />
      <ChakraProvider theme={theme}>
        <body>{children}</body>
      </ChakraProvider>
    </html>
  );
}
