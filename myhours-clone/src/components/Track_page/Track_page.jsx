import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import {
  AiFillEdit,
  AiFillFolderOpen,
  AiOutlineCheck,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineSmallDash,
  AiOutlineStar,
} from "react-icons/ai";
import FormTrack from "./Form_Track";
import { Popup } from "./popup";
import { Stopwatch } from "./Stopwatch";
// import { useStopwatch } from "./useStopwatch";
const init={
  client:'',
  task:'',
  tags:'',
  desc:''
}
function Track_page() {
  let Data = JSON.parse(localStorage.getItem("TaskData")) || [];
  const [dummy,setdumy]=useState([init])
if(Data.length===0){
  Data=dummy
}
  // const { setStartTimer, setTime, time } = useStopwatch(0);
  // const [start, setStart] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const now = new Date();
  const nows = now.toString().split(" ");
  const [date, setDate] = useState(now.getDate());
  console.log(dummy,"dsfdfhsjkgh")
  return (
    <Flex w="90%" m={"auto"}>
      <Box
        p="20px 50px"
        w={"100%"}
      >
        <Flex className="trackheader" justify="space-between" fontSize="25" pb={"7"} color="#375D75">
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
          {/* <Stopwatch setStartTimer={setStartTimer} time={time} setTime={setTime} /> */}
          <Box className="stopwatch">
          <Stopwatch />
            </Box>
        </Flex>
        {/* +Addt timeline */}
        <Flex justifyContent="space-between" mb={"1.5rem"}>
          <Box>
            <Button
              color="#375D75"
              bgColor={"#dceefa"}
              _hover={{ color: "#375D75", bgColor: "#dceefa" }}
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
        {open ? (
          ""
        ) : (
          <FormTrack setOpen={setOpen} status={status} setStatus={setStatus} />
        )}

        {/* Project or client data */}
        {/* data mapping */}
        {Data?.map((e, i) => (
          <Box key={i} border={"1px solid grey" } borderRadius='0.5rem'>
            <Flex className="dataform" justify={"space-between"} p="5" w={'100%'}>
              <Box className="datasubbox">
                <Flex gap="2" color={"#373d74"}>
                  {!e.client ? (
                    <AiFillEdit style={{ marginTop: "4px" }} />
                  ) : (
                    <AiFillFolderOpen style={{ marginTop: "4px" }} />
                  )}
                  <Text style={!e.client ? { color: "grey" } : {}}>
                    {!e.client ? "Add a Project,task or tag" : e.client}
                  </Text>
                  {/* task */}
                  <Text>
                    {e.task ? (
                      <AiOutlineCheck
                        color="black"
                        style={{ marginTop: "4px" }}
                      />
                    ) : (
                      ""
                    )}
                  </Text>
                  <Text >{e.task ? e.task : ""}</Text>
                  {/* tags */}
                  {/* <Text
                    bg={"#CCE5FF"}
                    borderRadius={"5px"}
                    color={"#0062CC"}
                    fontSize={"12px"}
                    p={"2px 5px"}
                  >
                    {e.tags ? e.tags : "Edit"}
                  </Text> */}
                  <Popup e={e} i={i} setStatus={setStatus}/>
                  {/* remove btn */}
                  <Text
                    color={"red"}
                    bg={"rgba(255, 190, 150, 0.4)"}
                    p={"1 "}
                    borderRadius={"3px"}
                    fontSize="12"
                    cursor={"pointer"}
                    onClick={() => {
                      Data.splice(i, 1);
                      localStorage.setItem("TaskData", JSON.stringify(Data));

                      setStatus((p) => !p);
                    }}
                  >
                    remove
                  </Text>
                </Flex>
                <Text
                  color={"#687481"}
                  textAlign={"left"}
                  style={!e.desc ? { color: "grey" } : {}}
                >
                  {!e.desc ? "Empty Description" : e.desc}
                </Text>
              </Box>
              {/* stopwatch */}
              <Box className="datasubbox">
                <Stopwatch />
                {/* <Text>
          <span>{('0' + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 600) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 60)).slice(-2)}</span>
        </Text> */}
              </Box>
            </Flex>
            <hr />
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default Track_page;
