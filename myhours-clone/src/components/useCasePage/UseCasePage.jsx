import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import style from "../Landing_Page/LandingPage.module.css";
import { useCaseData } from "../../utils";

const UseCasePage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <>
      <Box textAlign="center">
        <Text
          fontSize={isNotSmallerScreen ? "70px" : "50px"}
          fontWeight="light"
        >
          Use cases
        </Text>
        <Text
          my={isNotSmallerScreen ? "20px" : "15px"}
          fontSize={isNotSmallerScreen ? "40px" : "24px"}
          fontWeight="bold"
          color="rgb(55, 93, 117)"
        >
          & how My Hours solves problems
        </Text>
        <Text
          fontSize={isNotSmallerScreen ? "28px" : "18px"}
          fontWeight="light"
          color="rgb(55, 93, 117)"
          px={isNotSmallerScreen ? "0px" : "10px"}
        >
          From tracking time, to reporting and invoicing your clients, My Hours
          is there for you the whole time.
        </Text>
      </Box>
      <Box textAlign="center" m={isNotSmallerScreen ? "20" : "10"}>
        <Button
          p={isNotSmallerScreen ? "8" : "5"}
          colorScheme="telegram"
          backgroundColor="#3b8fc2"
          color="white"
          fontSize={isNotSmallerScreen ? "20px" : "14px"}
        >
          Get Started - It's Free
        </Button>
      </Box>
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        justifyContent="center"
        alignItems="center"
        mx="20px"
        gap="20px"
        mb={isNotSmallerScreen ? "40px" : "24px"}
      >
        {useCaseData.map((item, index) => (
          <Flex
            key={item.id}
            h="-webkit-fit-content"
            py="20px"
            backgroundColor="#f5f9fc"
            textAlign="left"
            borderRadius="2xl"
            boxShadow="2xl"
            justifyContent={"space-between"}
            flexDirection={"column"}
          >
            <img style={{ width: "100%" }} src={item.imgUrl} alt={item.id} />
            <Text
              ml="20px"
              fontSize="32px"
              fontWeight="semibold"
              color="rgb(55, 93, 117)"
            >
              {item.title}
            </Text>
            <Text ml="20px" fontSize="18px">
              {item.dis}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>

      <Box>
        <Text
          fontSize={isNotSmallerScreen ? "28px" : "20px"}
          textAlign="center"
          color="rgb(55, 93, 117)"
          fontWeight="bold"
        >
          My Hours has changed the way our customers work
        </Text>
      </Box>
      <Box
        w={isNotSmallerScreen ? "34%" : "95%"}
        m="auto"
        textAlign={"center"}
        my="40px"
      >
        <Text
          fontSize={isNotSmallerScreen ? "24px" : "16px"}
          fontFamily="Avenirnextltpro"
        >
          We’ve helped
          <span style={{ textDecoration: "underline" }}>
            {" "}
            250.000+ people
          </span>{" "}
          track their work{" "}
          <span style={{ textDecoration: "underline" }}>since 2002.</span>
          Our software{" "}
          <span style={{ textDecoration: "underline" }}>
            does not include employee monitoring
          </span>{" "}
          and never will.
        </Text>
      </Box>

      <SimpleGrid
        columns={[1, 2, 2, 3]}
        justifyContent="center"
        alignItems="center"
        mx="20px"
        gap="20px"
        mb={isNotSmallerScreen ? "40px" : "0px"}
      >
        <Box mb={!isNotSmallerScreen && "30px"}>
          <Text>
            "Easy tracking of billable hours across various projects.
            <span className={style.textGradient}>
              {" "}
              Makes time tracking for different tasks simple."
            </span>
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            - Paul H., Business Owner
          </Text>
        </Box>

        <Box mb={!isNotSmallerScreen && "30px"}>
          <Text>
            "My Hours is great for keeping track of time spent on different
            projects. It makes completing my mandatory timesheets at the end of
            the week<span className={style.textGradient}> WAY FASTER."</span>
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            - Michael B., Manager
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px"}>
          <Text>
            "I've enjoyed using My Hours, and I use it every day.{" "}
            <span className={style.textGradient}>
              Great tool for tracking my time!"{" "}
            </span>
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍- Cody H., Engineer
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px"}>
          <Text>
            "Ease of use, simplicity, streamlined,{" "}
            <span className={style.textGradient}>
              it really helped me get my hour tracking in order.
            </span>{" "}
            No negatives for the purpose and scope for which I am using the
            software."
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍- Arieh F., CFO
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px"}>
          <Text>
            "The software is very easy to set up, and you can start using it
            right away to track your time,{" "}
            <span className={style.textGradient}>
              assigning different hourly rates for different types of work."
            </span>
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍- Naomi S., Marketing Manager
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px"}>
          <Text>
            "Simple to use, perfect for the price,{" "}
            <span className={style.textGradient}>
              genuinely the best hour tracker I've used yet."
            </span>
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍- Leah M., Engineer
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px" }>
          <Text>
            <span className={style.textGradient}>
              "Easy to use for my team members who are remote but hourly.
            </span>{" "}
            My House provides a simple and easy way to record, track and manage
            activity."
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍- Thomas S., Head of Customer Success
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px" }>
          <Text>
            "I really love this time tracking software.
            <span className={style.textGradient}>
              {" "}
              It keeps track of all my hours and is really easy to use.
            </span>{" "}
            I would definitely recommend this software. There is nothing that I
            don't like about this software."{" "}
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍- Christina C., Paralegal
          </Text>
        </Box>
        <Box mb={!isNotSmallerScreen && "30px" }>
          <Text>
            "I love that I can track my hours and use it to{" "}
            <span className={style.textGradient}>
              generate meaningful reports
            </span>{" "}
            to measure time spent. It's intuitive, easy-to-use, and highly
            customizable."{" "}
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            ‍‍- Kristen B., Bussines Owner
          </Text>
        </Box>
      </SimpleGrid>


      <Flex justifyContent="center" gap="15px" alignItems="center">
        <Box my={isNotSmallerScreen ? "80px" :"30px"}>
          <a className={style.linkToWorking} href="#">
            Read more reviews
          </a>
        </Box>
        <Box>
          <img
            style={{ width: "25px" }}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/609937875793cc93f40c3a44_vectorpaint.svg"
            alt=""
          />
        </Box>
      </Flex>
    </>
  );
};

export default UseCasePage;
