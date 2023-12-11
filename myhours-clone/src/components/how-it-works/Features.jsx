import { Box, Heading, Img, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Features = ({ title, description, featuresImg }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <>
      <Box>
        <Box p={10} mt={isNotSmallerScreen ? "20" : "0"}>
          <Heading fontSize={"30px"}>{title}</Heading>
          <Text mt={6} fontSize="20px">
            {description}
          </Text>
        </Box>
        <Img src={featuresImg} alt={featuresImg} />
      </Box>
    </>
  );
};

export default Features;
