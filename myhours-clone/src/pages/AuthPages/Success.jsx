import { Flex, Box, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      backgroundColor="white"
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={16}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        margin="20"
      >
        <Stack>
          <Image
            w="170px"
            src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
            alt="Dan Abramov"
          />
        </Stack>
        <Box float="left">
          {" "}
          <Text fontSize="30px" fontWeight="bold" color={"gray.600"}>
            Thank you for signing up
          </Text>
          <br />
          <br />
          <Text fontSize="15px" fontWeight="bold" color={"gray.600"}>
            If you are not automatically redirected,
            <Link to="/login">
              {" "}
              <Text color={"blue.400"}>click here</Text>{" "}
            </Link>
            .
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Success;
