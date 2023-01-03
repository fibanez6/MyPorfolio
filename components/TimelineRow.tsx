import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  useColorModeValue,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TimelineRow = (props) => {
  const { title, date, description, index, arrLength } = props;
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");

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
        color: "rgba(134, 134, 134, 0.7)",
        bg: "linear-gradient(to bottom, #a0aee3 0%, #516acc 100%);",
      }}
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            fontSize="sm"
            color="gray.400"
            fontWeight="normal"
            fontFamily="Source Sans Pro"
          >
            {description}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default TimelineRow;
