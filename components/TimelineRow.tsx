'use client';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  Text,
  AccordionPanel,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { TimelineRowProps } from "../types/components/Timeline";

const TimelineRow = ({ title, subtitle, date, location, content }: TimelineRowProps) => {
  const titleColor = useColorModeValue("primary.400", "secundary.main")

  return (
    <Box
      h="100%"
      position="relative"
      paddingLeft="75px"
      paddingBottom="30px"
      zIndex={1}
      data-date={date}
      _after={{
        content: "attr(data-date)",
        position: "absolute",
        top: "0",
        left: "50px",
        w: "12px",
        h: "12px",
        fontSize: "14px",
        lineHeight: "0.6",
        textIndent: "-70px",
        border: "2px solid #fff",
        borderRadius: "50%",
        bg: "linear-gradient(to bottom, #a0aee3 0%, #516acc 100%);",
      }}
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Flex flex="1" textAlign="left" fontWeight="semibold" flexDir="column">
                <Text fontSize="xl" color={titleColor}>{title}</Text>
                <Flex justifyContent="space-between">
                  <Text fontSize="sm">{subtitle}</Text>
                  <Text fontSize="sm">{location}</Text>
                </Flex>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            fontSize="sm"
            fontWeight="normal"
            fontFamily="Source Sans Pro"
          >
            {content}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default TimelineRow;
