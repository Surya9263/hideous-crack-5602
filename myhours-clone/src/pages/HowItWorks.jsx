import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
import Steps from "../components/how-it-works/Steps";
import Supports from "../components/how-it-works/Supports";
import Features from "../components/how-it-works/Features";
import { SupportData, featuresData, stepsData } from "../utils";

const HowItWorks = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <>
      <Flex
        width="85%"
        margin={"auto"}
        direction="column"
        alignItems="center"
        textAlign={"center"}
        mt={isNotSmallerScreen ? "20" : "8"}
        gap={isNotSmallerScreen ? "8" : "5"}
      >
        <Text fontSize={isNotSmallerScreen ? "6xl" : "4xl"}>How it works</Text>
        <Heading
          fontSize={isNotSmallerScreen ? "4xl" : "2xl"}
          color="rgb(54,92,117)"
        >
          & why you should switch to My Hours
        </Heading>
        <Text
          fontSize={isNotSmallerScreen ? "3xl" : "1xl"}
          color="rgb(54,92,117)"
        >
          Time tracking was a pain. We fixed it and made time tracking worth the
          effort. My Hours is easy to use and gets the most out of your data
          with powerful reporting. Teams that use My Hours are more productive,
          efficient and organized.
        </Text>
        <Link to="/signup">
          <Button width={52} bg="rgb(59,143,194)" color={"white"} size="lg">
            Get Startde - It's Free
          </Button>
        </Link>
      </Flex>
      <Flex
        width={[290, 500, 700, 900]}
        margin="auto"
        my={isNotSmallerScreen ? "20" : "12"}
        p={4}
        height={isNotSmallerScreen && "600"}
      >
        <Box boxShadow="2xl" width={"100%"} height={"100%"}>
          <ReactPlayer
            url="https://youtu.be/VpMysclixyQ"
            controls
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Flex>
      <Box width={["100%", "75%"]} margin="auto">
        {featuresData.map((feature, index) => (
          <Features {...feature} key={index} />
        ))}
      </Box>
      <Box>
        {stepsData.map((steps, index) => (
          <Steps {...steps} key={index} />
        ))}
      </Box>
      <Flex p={[8, 14]} gap={24} direction={["column", "row"]} mt={10}>
        {SupportData.map((support, index) => (
          <Supports {...support} key={index} />
        ))}
      </Flex>
      <Box width={"75%"} margin="auto" textAlign={"center"} mt={20}>
        <Heading fontSize={"30px"} textDecoration="underline">
          No, you cannot spy on your employees with My Hours
        </Heading>
        <Text fontSize={"20px"} mt={6}>
          My Hours does not record your or your employees’ screens. No
          screenshots, no apps tracked, no employee monitoring. Of course, you
          are free to view work logs that your team members have entered.
        </Text>
      </Box>

      <Box width={"75%"} margin="auto" textAlign={"center"} mt={40}>
        <Link to="features">
          <Heading
            fontSize={"30px"}
            textDecoration="underline"
            color={"rgb(54,92,117)"}
            cursor="pointer"
            _hover={{ textDecoration: "none" }}
          >
            Take a look at the complete list of features in My Hours.
          </Heading>
        </Link>
        <Text color={"rgb(54,92,117)"} fontSize="2xl" mt={10}>
          Or simply try it out:{" "}
        </Text>
        <Button bg={"rgb(59,142,195)"} mt={10} size="lg" color="white">
          Get Started - It's Free
        </Button>
      </Box>

      <Box margin="auto" textAlign={"center"} mt={40} mb={40}>
        <Heading color={"rgb(54,92,117)"}>Have questions? We're here</Heading>
        <Text width={["95%", "62%"]} margin="auto" fontSize="20px" mt={10}>
          It's always nice to have someone to talk to when facing new software.
          Get in touch and we'll try our best to help you out.
        </Text>

        <Flex
          gap={6}
          justifyContent="center"
          direction={["column", "column", "row"]}
          mt={6}
        >
          {["EMAIL & LIVE CHAT", "TRAINNIG FOR TEAMS", "KNOWLEDGE BASE"].map(
            (item, index) => (
              <Link to="#" key={index}>
                <Flex
                  alignItems="center"
                  color={"rgb(59,142,195)"}
                  justifyContent="center"
                >
                  <BsCheck fontSize={"30px"} />
                  <Text
                    fontSize={isNotSmallerScreen ? "20px" : "17px"}
                    textDecoration="underline"
                    cursor="pointer"
                    _hover={{ textDecoration: "none" }}
                  >
                    {item}
                  </Text>
                </Flex>
              </Link>
            )
          )}
        </Flex>
      </Box>
    </>
  );
};

export default HowItWorks;
