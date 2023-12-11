import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import s from "./Pricing.module.css";

function BottomSection() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <Box display="flex" gap="1%" marginBottom="4rem" flexDirection={!isNotSmallerScreen && "column"}>
      <Box
        boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px"
        className={s.b2}
        p="1rem"
      >
        <Box>
          <Text className={s.heading2}>Waste no more time, jump right in!</Text>
        </Box>
        <Box textAlign="center" mb="2rem" p="1rem">
          <Button
            fontSize={isNotSmallerScreen ? "1.2rem" : ".9rem"}
            bgColor="#3b8fc2"
            p={isNotSmallerScreen ? "1.9rem 2.5rem" : ".9rem .5rem"}
            color="#fff"
          >
            Get Started - It's Free
          </Button>
        </Box>
        <Box ox textAlign="center" pb={"1rem"}>
          My Hours is Free to use for teams of any size.{" "}
          <span className={s.underline}>Pro</span>
          <span className={s.underline}>paid</span>
          <span className={s.underline}>plan</span>
          comes with additional features like invoicing, admin controls and
          priority support.
        </Box>
      </Box>
      <Box
        boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px"
        className={s.b1}
        p="1rem"
        textAlign="center"
      >
        <Box>
          <Text fontSize="2.5rem" p="0.5rem">
            Need more info? Get a product demo.
          </Text>
        </Box>
        <Box textAlign="center" m="2rem 0" p="1rem">
          <Button
            fontSize="1.2rem"
            p={isNotSmallerScreen ? "1.9rem 2.5rem" : ".9rem .5rem"}
            bgColor="white"
            border="1px solid black"
          >
            Talk to our Team
          </Button>
        </Box>
        <Box pb={"1rem"} textAlign="center">
          Teams of 6+ are welcome to book a personalized demo to see how My
          Hours works in detail.
        </Box>
      </Box>
    </Box>
  );
}

export default BottomSection;
