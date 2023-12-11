import React from "react";
import style from "./Pricing.module.css";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

function ReadmoreSection() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px">
      <Text className={style.readbox}>
        <span className={style.quatation}>“ </span> I have tested similar time
        tracking apps but they all have limits. My Hours is without a doubt the
        most important tool I use in my business. <span>”</span>
      </Text>
      <Box
        className={style.readlink}
        display="flex"
        justifyContent="space-between"
        w="80%"
        m="auto"
        mb="2rem"
      >
        <Box className={style.kelvin}>- Kevin from St. Petersburg, FL, USA</Box>
        <a to href="#">
          <Box className={style.link} display="flex">
            Read more reviews
            <Box pt="4px">
              {" "}
              <IoIosArrowForward />{" "}
            </Box>
          </Box>
        </a>
      </Box>
      <Box
        pb="3rem"
        mt="3rem"
        textAlign="center"
        display="flex"
        flexWrap="wrap"
        gap="4rem"
        justifyContent="space-evenly"
        m="auto"
      >
        <Box padding={isNotSmallerScreen ? "1rem" : "0rem"}>
          <Box>
            <strong>MEMBERS</strong>
          </Box>
          <Box className={style.num}>
            {" "}
            250<span className={style.skyblue}>k</span>
          </Box>
        </Box>
        <Box padding={isNotSmallerScreen ? "1rem" : "0rem"}>
          <Box>
            <strong>LOGGED HOURS</strong>
          </Box>
          <Box className={style.num}>
            {" "}
            1.6<span>b</span>
          </Box>
        </Box>
        <Box padding="1rem">
          <Box>
            <strong>AVERAGE RATING</strong>
          </Box>
          <Box className={style.num}>
            4.7<span>/5</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReadmoreSection;
