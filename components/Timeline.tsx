import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import TimelineRow from "./TimelineRow";

const timelineData = [
  {
    title: "Job 1",
    date: "Apr 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Job 2",
    date: "Apr 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Job 3",
    date: "Apr 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Job 4",
    date: "Apr 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Timeline = () => {
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");
  const bg = useColorModeValue("gray.50", "gray.700");
  return (
    <Card p="1rem" maxHeight="100%" maxW="full" margin="auto" alignItems="center">
      {/* <CardHeader pt="0px" p="28px 0px 35px 21px"> */}
      <CardHeader>
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            WORK EXPERIENCE
          </Text>
        </Flex>
      </CardHeader>
      {/* <CardBody ps="26px" pe="0px" mb="31px" position="relative"> */}
      <CardBody maxW="full">
        <Flex
          direction="column"
          position="relative"
          _after={{
            bg: "linear-gradient(to top, rgba(134, 214, 243, 0) 0%, rgba(81, 106, 204, 1) 100%)",
            content: '""',
            left: "55px",
            width: "2px",
            top: 0,
            height: "100%",
            position: "absolute",
          }}
        >
          {timelineData.map((row, index, arr) => {
            return (
              <TimelineRow
                title={row.title}
                date={row.date}
                description={row.description}
                index={index}
                arrLength={arr.length}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Timeline;
