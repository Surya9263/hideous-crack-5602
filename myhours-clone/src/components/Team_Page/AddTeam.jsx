import { Box, Button, Checkbox, Divider, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, SimpleGrid, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaListUl,FaListOl,FaQuoteRight } from "react-icons/fa";
import { TbLink } from "react-icons/tb";
import { BiItalic } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { VscCaseSensitive } from "react-icons/vsc";
import {AiFillCaretDown} from "react-icons/ai"
import {AiFillCaretUp} from "react-icons/ai";

const AddTeam = () => {
    const [data,setData]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [role,setRole]=useState("");
    const [value,setValue]=useState(0.00);
    const [value2,setValue2]=useState(0.00);

    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);

    

    const handleClick=()=>{
        setData([...data,{
        id:Date.now(),
        name:name,
        email:email,
        LoborRate:value,
        BillableRate:value2,
        Role:role}])
    }
    localStorage.setItem("Team",JSON.stringify(data));
  return (
    <>
    <FormControl w="40%" color="gray" >
        <FormLabel fontSize="small">NAME</FormLabel>
            <Input onChange={(e)=>setName(e.target.value)} autoFocus  type='text' />
        <FormLabel fontSize="small">EMAIL</FormLabel>
            <Input onChange={(e)=>setEmail(e.target.value)} type='email' />
    </FormControl>
        <FormLabel mb="-6" fontSize="small" color="gray">NOTES (PRIVATE TO ADMINS)</FormLabel>
        <Box mt={'2rem'} className="textbox" border={"1px solid lightgrey"} borderRadius={"0.4rem"}  width={"40%"} bgColor={"#fff"}>
        
            <Flex justifyContent={"space-between"}m={"0 0.5rem"}>
              <Flex border="0.5rem" m="4px" gap={2} color={"grey"}>
                <Text><b>B</b></Text>
                <Text mt={"8px"}><BiItalic /></Text>
                <Text><b>H<small>1</small></b></Text>
                <Text><b>H<small>2</small></b></Text>
                <Text mt={"8px"}><b> <TbLink /></b></Text>
                <Text mt={"8px"}><b> <FaListUl /></b></Text>
                <Text mt={"8px"}><b> <FaListOl /></b></Text>
                <Text mt={"8px"}><b> <FaQuoteRight fontSize={"0.9rem"} /></b></Text>
              
              </Flex>
              <Flex >
                <Text  pt={1} mt={"4px"}><b> <ImAttachment /></b></Text>
                <Text  pt={1} mt={"0.1rem"}><b> <VscCaseSensitive fontSize={"1.5rem"} /></b></Text>

              </Flex>
            </Flex>
            
              <Textarea border={"none"} borderTop={"1px solid"} placeholder="Add notes..." size="sm" name='desc' />
    </Box>
    <Divider my="8" w="40%" orientation='horizontal' />
    <FormLabel fontSize="small" color="gray">ROLE</FormLabel>
    <RadioGroup defaultValue='1'>
     <Stack>
        <Box p="10px" border="1px" borderColor="gray.200" w="40%">
            <Radio value='3'><span style={{marginLeft:"20px",color:"rgb(104,116,129)",fontWeight:"bold"}} onClick={(e)=>setRole(e.target.innerText)}>Admin</span></Radio>
            <Text ml="10" color="rgb(153,153,153)">Can view and edit anything in group or workspace.</Text>
        </Box>
        <Box p="10px" border="1px" borderColor="gray.200" w="40%">
            <Radio value='2'><span style={{marginLeft:"20px",color:"rgb(104,116,129)",fontWeight:"bold"}} onClick={(e)=>setRole(e.target.innerText)}>Manager</span></Radio>
            <Text ml="10" color="rgb(153,153,153)">Can view and manage assigned projects. Cannot view other projects.</Text>
        </Box>
        <Box p="10px" border="1px" borderColor="gray.200" w="40%">
            <Radio value='1'><span style={{marginLeft:"20px",color:"rgb(104,116,129)",fontWeight:"bold"}} onClick={(e)=>setRole(e.target.innerText)}>Normal</span></Radio>
            <Text ml="10" color="rgb(153,153,153)">Can only track time on assigned projects/tasks.</Text>
        </Box>
     </Stack>
    </RadioGroup>
    <Divider my="8" w="40%" orientation='horizontal' />
    <Box p="4" w="40%" backgroundColor="#f9fafb">
        <Text cursor="pointer" onClick={()=>setShow(!show)} display="flex" alignItems="center" color="rgb(104,116,129)" fontWeight="semibold" fontSize="2xl">Lobor Rate{show?<AiFillCaretUp/>:<AiFillCaretDown/>}</Text>
        {show &&<Text color="rgb(104,116,129)">Enter default hourly rate for the team member to calculate Labor cost. This rate can be further specified on individual projects.</Text>}
        {show && <Stack spacing={4} my="4">
            <InputGroup>
                <InputLeftAddon backgroundColor="#dceefa" children='INR' />
                <Input value={value} onChange={(e)=>setValue(+(e.target.value))} type='tel'/>
            </InputGroup>
        </Stack>}
        {show===false && <Text color="rgb(104,116,129)">Current hourly rate:<span>&#8377;</span>{value===""?"0$":value}</Text>}
    </Box>
    <Box p="4" my="4" w="40%" backgroundColor="#f9fafb">
        <Text cursor="pointer" onClick={()=>setShow2(!show2)} display="flex" alignItems="center" color="rgb(104,116,129)" fontWeight="semibold" fontSize="2xl">Billable Rate{show2?<AiFillCaretUp/>:<AiFillCaretDown/>}</Text>
        {show2 &&<Text color="rgb(104,116,129)">Enter default hourly rate for the team member to calculate Labor cost. This rate can be further specified on individual projects.</Text>}
        {show2 && <Stack spacing={4} my="4">
            <InputGroup>
                <InputLeftAddon backgroundColor="#dceefa" children='INR' />
                <Input value={value2} onChange={(e)=>setValue2(+(e.target.value))} type='tel'/>
            </InputGroup>
        </Stack>}
        {show2===false && <Text color="rgb(104,116,129)">Current billable rate:<span>&#8377;</span>{value2===""?"0$":value2}</Text>}
    </Box>
    <Box p="4" w="40%" backgroundColor="#f9fafb">
        <Text display="flex" alignItems="center" color="rgb(104,116,129)" fontWeight="semibold" fontSize="2xl">Approval settings<AiFillCaretDown/></Text>
        <Text color="rgb(104,116,129)">Approval is not required</Text>
    </Box>
    <Divider my="8" w="40%" orientation='horizontal' />
    <Checkbox color="rgb(104,116,129)" fontWeight="semibold">Automatically add this team member to all new projects</Checkbox>
    <Box backgroundColor="#fff3cd" w="40%" borderRadius="base">
        <Text my="20px" color="rgb(133, 100, 4)">Please note: Each team member you add, will be charged according to your subscription plan.</Text>
    </Box>
    <Flex gap="15px">
        <Button p="2" colorScheme='telegram' onClick={handleClick}>Invite</Button>
        <Button p="2" colorScheme='linkedin'>Cancel</Button>
    </Flex>
    </>
  )
}

export default AddTeam;