import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineSmallDash,
  AiOutlineStar,
} from "react-icons/ai";
import FormTrack from "./Form_Track";
import { Stopwatch } from "./Stopwatch";

function Track_page() {
  const [open, setOpen] = useState(false);
  const now = new Date();
  const nows = now.toString().split(" ");
  const [date, setDate] = useState(now.getDate());
  return (
    <Box
      w="80%"
      p="20px 50px"
      m={"auto"}
      border={"solid"}
      // bgColor="gray.300"
    >
      {/* todays */}
      <Flex justify="space-between" fontSize="25" pb={"7"} color="#375D75">
        <Flex gap="5">
          <Text fontSize={"30px"}>
            Today, {date} {nows[1]}
          </Text>

          <Box>
            <Input type="date" w="50px" border={"none"} />
          </Box>
          <Box>
            <ArrowBackIcon mt={"1"} fontSize={"1.5rem"} />
          </Box>
          <Box>
            <ArrowForwardIcon mt={"1"} fontSize={"1.5rem"} />
          </Box>
          <Box mt={2}>
            <AiOutlineHome mt={"2"} fontSize={"1.5rem"} />
          </Box>
        </Flex>
        {/*  Stopwatch*/}
        <Stopwatch />
      </Flex>
      {/* +Addt timeline */}
      <Flex justifyContent="space-between" mb={"1.5rem"}>
        <Box>
          <Button
            color="#375D75"
            bgColor={"#dceefa"}
            _hover={{color:"#375D75", bgColor:"#dceefa"}}
            onClick={() => setOpen(!open)}
          >
            <AiOutlinePlus /> Add time log
          </Button>
        </Box>
        <Flex>
          <Flex gap="5" color="#375D75">
            <Button bgColor={"#dceefa"}>
              <AiOutlineSmallDash />
            </Button>
            <Button gap="2" bgColor={"#dceefa"}>
              <AiOutlineMenu />
              {/* Timeline */}
            </Button>
            <Button gap="2" bgColor={"#dceefa"}>
              <AiOutlineStar />
              {/* Favourite logs */}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* form box */}
      {open ? "" : <FormTrack setOpen={setOpen} />}
    </Box>
  );
}

export default Track_page;
