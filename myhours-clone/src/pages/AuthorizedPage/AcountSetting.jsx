import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SiAndroid } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { CgPlug } from "react-icons/cg";
const AccountSetting = () => {
  return (
    <Flex >
      <Box width="100%" marginTop="25px">
        <Box width="70%" margin="auto">
          <Text fontSize="40px">Account admin </Text>
          <br />
          <Flex alignItems="center">
            <CgPlug /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://app.myhours.com/?&_ga=2.170535328.1847263091.1664255522-1335593282.1664255522#/apps" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
                General settings
              </Text>
            </a>
          </Flex>


          <br />
          <Flex alignItems="center">
            <CgPlug /> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://apps.apple.com/us/app/spica-my-hours-pro/id1532035406" target="_blank">
              <Text
                _hover={{
                  textDecoration:"underline",
                  color:"rgb(46,135,208)"
                }}
                color={"blue.400"}
              >
               Invoicing & company details
              </Text>
            </a>
          </Flex>

         

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
          Time, date & currency formats
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
              Company logo
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
              Tracking reminders
              </Text>
            </a>
          </Flex>

          <br />
           <Text fontSize="20px" color="rgb(67,102,125)">Manage account entities</Text>
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
              Set time logs options
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
   Import your projects, team, timesheets, clients, tasks
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
Manage task templates
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
Manage your tags
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
Export your time logs, projects
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
View audit log
   </Text>
 </a>
</Flex>


        </Box>
      </Box>
    </Flex>
  );
};

export default AccountSetting;
