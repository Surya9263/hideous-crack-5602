import React from "react";
import style from "./LandingPage.module.css";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { landingImageData } from "../../utils";

const LandingPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <>
      <Box className={style.parent}>
        <p className={style.parentHead} style={{ fontWeight: "lighter" }}>
          <span className={style.parentSpan} style={{ fontWeight: "bolder" }}>
            Organize{" "}
          </span>
          projects,<span style={{ fontWeight: "bolder" }}> Track</span> time and{" "}
          <span style={{ fontWeight: "bolder" }}>Report</span> your work
        </p>
      </Box>
      <Box className={style.parent}>
        <p className={style.parent_paragraph}>
          Coordinate projects and tasks. Track your work hours and create
          awesome-looking reports for clients.
          <span className={style.parent_span}>
            All-in-one free time tracking software.
          </span>
        </p>
      </Box>
      <Box textAlign="center" mt="20">
        <Link to="login">
          <Button
            p="8"
            colorScheme="telegram"
            backgroundColor="#3b8fc2"
            color="white"
            fontSize={isNotSmallerScreen ? "20px" : "15px"}
          >
            Get Started - It's Free
          </Button>
        </Link>
      </Box>
      <Box w={isNotSmallerScreen ? "100%" : "95%"} m="auto" mt="20px">
        <img
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png"
          alt=""
        />
      </Box>
      <Text
        my="85px"
        fontFamily="Avenir Next"
        fontSize="28px"
        color="rgb(55, 93, 117)"
        textAlign="center"
      >
        Trusted by more than{" "}
        <span className={style.parent_span}>100.000 businesses</span> worldwide
      </Text>
      <Flex
        width={isNotSmallerScreen && "90%"}
        m="auto"
        justifyContent="center"
        alignItems={"center"}
        gap="40px"
        flexDirection={isNotSmallerScreen ? "row" : "column"}
      >
        <Box>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png"
            alt="1"
          />
        </Box>
        <Box>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png"
            alt="2"
          />
        </Box>
        <Box>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png"
            alt="3"
          />
        </Box>
      </Flex>
      <SimpleGrid
        columns={[2, 2, 3, 6]}
        mt={isNotSmallerScreen ? "80px" : "60px"}
        mb={isNotSmallerScreen ? "170px" : "60px"}
        justifyContent="center"
        alignItems="center"
        gap={isNotSmallerScreen ? "90px" : "50px"}
        mx="20px"
      >
        {landingImageData?.map((item) => (
          <Box key={item.id}>
            <img style={{ width: "100px" }} src={item.imgSrc} alt={item.id} />
          </Box>
        ))}
      </SimpleGrid>

      <Flex
        className={style.flexClass}
        justifyContent="space-between"
        gap="5rem"
      >
        <Box className={style.flexBox1}>
          <Text
            fontFamily="Avenir Next"
            fontSize="28px"
            color="rgb(55, 93, 117)"
            textAlign="left"
            fontWeight="bolder"
          >
            Coordinate your team, projects and tasks
          </Text>
          <Text fontSize="18px" mb="20px">
            Get out of your inbox mess: create projects, assign tasks and
            write-down or attach details. Track project profitability with
            hourly rates. Set up budgets and get reminded when you’re close.
          </Text>
          <Text
            as="i"
            color="rgb(55, 93, 117)"
            fontFamily="Avenir Next"
            fontSize="larger"
            fontWeight="semibold"
          >
            “Excellent time tracker to manage your tasks! It changed the way I
            organize myself, I'm more productive since I used it!” - Guadalupe
            G., Art Director
          </Text>
        </Box>
        <Box className={style.flexBox2}>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png"
            alt=""
          />
        </Box>
      </Flex>
      <Flex
        className={style.flexClassReverse}
        justifyContent="space-between"
        gap="2rem"
        mt="100px"
      >
        <Box className={style.flexBox3}>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png"
            alt=""
          />
        </Box>
        <Box className={style.flexBox4}>
          <Text
            style={{
              fontFamily: "Avenir Next",
              fontSize: "28px",
              color: "rgb(55, 93, 117)",
              textAlign: "left",
              fontWeight: "bolder",
            }}
          >
            Track your work hours, expenses and more
          </Text>
          <Text fontSize="18px" mb="20px">
            With My Hours you can track all your work. Add a detailed
            description to your time logs and expenses. We know time tracking is
            a hassle, so we’ve designed it to be super fast.
          </Text>
          <Text
            as="i"
            color="rgb(55, 93, 117)"
            fontFamily="Avenir Next"
            fontSize="larger"
            fontWeight="semibold"
          >
            “A wonderful product. We no longer have to use multiple programs to
            track time, projects, PTO, etc.” - Katie L., Office Coordinator
          </Text>
        </Box>
      </Flex>
      <Flex
        className={style.flexClass}
        justifyContent="space-between"
        mt="100px"
        gap="2rem"
        alignItems="center"
      >
        <Box className={style.flexBox1}>
          <Text
            style={{
              fontFamily: "Avenir Next",
              fontSize: "28px",
              color: "rgb(55, 93, 117)",
              textAlign: "left",
              fontWeight: "bolder",
            }}
          >
            Create great-looking reports
          </Text>
          <Text fontSize="18px" mb="20px">
            Turn your work into dazzling reports with confidence. From Dashboard
            to more advanced time analytics. No need for extra spreadsheet work,
            even though you can export your data.
          </Text>
          <Text
            as="i"
            color="rgb(55, 93, 117)"
            fontFamily="Avenir Next"
            fontSize="larger"
            fontWeight="semibold"
          >
            “My Hours is a super easy to use time tracker and great for sending
            hourly reports to clients for billable work” - Erin A. Business
            owner
          </Text>
        </Box>
        <Box className={style.flexBox2}>
          <img
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png"
            alt=""
          />
        </Box>
      </Flex>
      <Flex justifyContent="center" gap="15px" alignItems="center" p="9px">
        <Box my="80px">
          <a className={style.linkToWorking} href="#">
            See how My Hours works in detail
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
      <Box>
        <Text
          fontSize="28px"
          textAlign="center"
          color="rgb(55, 93, 117)"
          fontWeight="bold"
        >
          A flexible tool for all types of organizations
        </Text>
      </Box>
      <Flex
        className={style.flexClass2}
        my="50px"
        justifyContent="space-between"
        gap="2rem"
        textAlign="center"
        color="rgb(55, 93, 117)"
      >
        <Box className={style.flexBox5}>
          <Text fontSize="25px" fontWeight="bold">
            Billing
          </Text>
          <Text fontSize="20px" fontWeight="semibold">
            We need to bill our clients with flexible hourly rates.
          </Text>
          <a
            className={style.anchorTagsHover}
            href="#"
            style={{ fontSize: "18px" }}
          >
            Here's how
          </a>
        </Box>
        <Box className={style.flexBox5}>
          <Text fontSize="25px" fontWeight="bold">
            Profitability
          </Text>
          <Text fontSize="20px" fontWeight="semibold">
            We would like to calculate the profitability of our projects.
          </Text>
          <a
            className={style.anchorTagsHover}
            href="#"
            style={{ fontSize: "18px" }}
          >
            Here's how
          </a>
        </Box>
        <Box className={style.flexBox5}>
          <Text fontSize="25px" fontWeight="bold">
            Time tracking
          </Text>
          <Text fontSize="20px" fontWeight="semibold">
            We want to track time on projects and tasks.
          </Text>
          <a
            className={style.anchorTagsHover}
            href="#"
            style={{ fontSize: "18px" }}
          >
            Here's how
          </a>
        </Box>
      </Flex>
      <Flex
        className={style.flexClass2}
        mb="85px"
        alignItems="center"
        justifyContent="space-between"
        gap="2rem"
        textAlign="center"
        color="rgb(55, 93, 117)"
      >
        <Box className={style.flexBox5}>
          <Text fontSize="25px" fontWeight="bold">
            Attendance
          </Text>
          <Text fontSize="20px" fontWeight="semibold">
            We need to track employee attendance/absence and tasks.
          </Text>
          <a
            className={style.anchorTagsHover}
            href="#"
            style={{ fontSize: "18px" }}
          >
            Here's how
          </a>
        </Box>
        <Box className={style.flexBox5}>
          <Text fontSize="25px" fontWeight="bold">
            Client reporting
          </Text>
          <Text fontSize="20px" fontWeight="semibold">
            I need to report the time spent to clients or invoice them.
          </Text>
          <a
            className={style.anchorTagsHover}
            href="#"
            style={{ fontSize: "18px" }}
          >
            Here's how
          </a>
        </Box>
        <Box className={style.flexBox5}>
          <Flex justifyContent="center" gap="10px">
            <a className={style.linkToWorking} href="#">
              Find more use cases
            </a>
            <img
              style={{ width: "25px" }}
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/609937875793cc93f40c3a44_vectorpaint.svg"
              alt=""
            />
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Text
          fontSize="28px"
          textAlign="center"
          color="rgb(55, 93, 117)"
          fontWeight="bold"
        >
          My Hours has changed the way our customers work
        </Text>
      </Box>
      <Box className={style.flexClass3} m="auto" textAlign={"center"} my="40px">
        <Text fontSize="20px" fontFamily="Avenirnextltpro">
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
      <Flex
        className={style.flexClass2}
        justifyContent="space-between"
        gap="2rem"
        fontSize="18px"
        textAlign="left"
      >
        <Box className={style.flexBox5}>
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
        <Box className={style.flexBox5}>
          <Text>
            "My Hours is great for keeping track of time spent on different
            projects. It makes completing my mandatory timesheets at the end of
            the week<span className={style.textGradient}> WAY FASTER."</span>
          </Text>
          <Text mt="15px" fontWeight="bold" fontStyle="italic">
            - Michael B., Manager
          </Text>
        </Box>
        <Box className={style.flexBox5}>
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
      </Flex>
      <Flex
        className={style.flexClass2}
        justifyContent="space-between"
        gap="2rem"
        fontSize="18px"
        textAlign="left"
        my="20px"
      >
        <Box className={style.flexBox5}>
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
        <Box className={style.flexBox5}>
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
        <Box className={style.flexBox5}>
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
      </Flex>
      <Flex
        className={style.flexClass2}
        justifyContent="space-between"
        gap="2rem"
        fontSize="18px"
        textAlign="left"
      >
        <Box className={style.flexBox5}>
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
        <Box className={style.flexBox5}>
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
        <Box className={style.flexBox5}>
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
      </Flex>
      <Flex justifyContent="center" gap="15px" alignItems="center">
        <Box my="80px">
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
      <Box>
        <Text
          fontSize="28px"
          textAlign="center"
          color="rgb(55, 93, 117)"
          fontWeight="bold"
        >
          Have questions? We're here
        </Text>
      </Box>
      <Box className={style.flexClass3} m="auto" textAlign="center" my="20px">
        <Text fontSize="18px">
          It's always nice to have someone to talk to when facing new software.
          Get in touch and we'll try our best to help you out.
        </Text>
      </Box>
      <Flex
        className={style.flexClass2}
        justifyContent="center"
        gap="1rem"
        color="rgb(59, 143, 194)"
      >
        <Box>
          <Flex
            alignItems="center"
            gap="5px"
            fontSize="15px"
            fontFamily="Avenir next"
          >
            <img
              style={{ width: "20px" }}
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg"
              alt=""
            />
            <a className={style.anchorTagsHover} href="#">
              EMAIL & LIVE CHAT
            </a>
          </Flex>
        </Box>
        <Box>
          <Flex
            alignItems="center"
            gap="5px"
            fontSize="15px"
            fontFamily="Avenir next"
          >
            <img
              style={{ width: "20px" }}
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg"
              alt=""
            />
            <a className={style.anchorTagsHover} href="#">
              TRAINING FOR TEAMS
            </a>
          </Flex>
        </Box>
        <Box>
          <Flex
            alignItems="center"
            gap="5px"
            fontSize="15px"
            fontFamily="Avenir next"
          >
            <img
              style={{ width: "20px" }}
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg"
              alt=""
            />
            <a className={style.anchorTagsHover} href="#">
              KNOWLEDGE BASE
            </a>
          </Flex>
        </Box>
      </Flex>
      <Flex
        className={style.flexClass4}
        mt="180px"
        mb="100px"
        justifyContent="center"
        gap="20px"
      >
        <Box
          className={style.flexBox6}
          backgroundColor="#f8fafb"
          px={isNotSmallerScreen ? "80px" : "20px"}
          py="50px"
          textAlign="center"
        >
          <Text
            fontWeight="bold"
            fontSize={isNotSmallerScreen ? "38px" : "30px"}
            color="rgb(55, 93, 117)"
          >
            Waste no more time,jump right in!
          </Text>
          <Button
            my="25px"
            p={isNotSmallerScreen ? "7" : "4"}
            colorScheme="telegram"
            backgroundColor="#3b8fc2"
            color="white"
            fontSize="20px"
          >
            Get Started - It's Free
          </Button>
          <Text color="rgb(55, 93, 117)">
            My Hours is Free to use for teams of any size.{" "}
            <span style={{ color: "black", textDecoration: "underline" }}>
              Pro paid plan
            </span>{" "}
            comes with additional features like invoicing, admin controls and
            priority support.
          </Text>
        </Box>
        <Box
          className={style.flexBox7}
          backgroundColor="#faf9f7"
          py="50px"
          px={isNotSmallerScreen ? "80px" : "20px"}
          color="rgb(55, 93, 117)"
          textAlign="left"
        >
          <Text fontSize={isNotSmallerScreen ? "38px" : "30px"}>
            Need more info? Get a product demo.
          </Text>
          <Button
            className={style.talkToTeamBtn}
            backgroundColor="transparent"
            my="25px"
            p={isNotSmallerScreen ? "7" : "4"}
            fontSize="20px"
          >
            Get Started - It's Free
          </Button>
          <Text color="rgb(55, 93, 117)">
            Teams of 6+ are welcome to book a personalized demo to see how My
            Hours works in detail.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default LandingPage;
