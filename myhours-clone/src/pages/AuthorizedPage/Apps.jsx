import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SiAndroid } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { CgPlug } from "react-icons/cg";
const Apps = () => {
  return (
    <Flex >
      <Box width="100%" marginTop="25px">
        <Box width="70%" margin="auto">
          <Text fontSize="40px">Apps</Text>
          <br />
          <Flex alignItems="center">
            <SiAndroid /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://app.myhours.com/?&_ga=2.170535328.1847263091.1664255522-1335593282.1664255522#/apps" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
                Android app
              </Text>
            </a>
          </Flex>


          <br />
          <Flex alignItems="center">
            <BsApple /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://apps.apple.com/us/app/spica-my-hours-pro/id1532035406" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
                iOS App
              </Text>
            </a>
          </Flex>

           <br />
           <Text fontSize="20px" color="rgb(67,102,125)">Integrations with other apps</Text>

           <br />
          <Flex alignItems="center">
            <CgPlug /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://app.myhours.com/?&_ga=2.170535328.1847263091.1664255522-1335593282.1664255522#/integrations/quickbooks" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
                Quickbooks
              </Text>
            </a>
          </Flex>   

          <br />
          <Flex alignItems="center">
            <CgPlug /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://app.myhours.com/#/integrations/zapier" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
                Zapier
              </Text>
            </a>
          </Flex>

          <br />
          <Flex alignItems="center">
            <CgPlug /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://documenter.getpostman.com/view/8879268/TVmV4YYU" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
               My hours API documentation
              </Text>
            </a>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Apps;
