import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { BiArchive } from "react-icons/bi";
import { CgExport } from "react-icons/cg";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Team = () => {
    
    const data=JSON.parse(localStorage.getItem("Team")) || [];

    const navigate=useNavigate();

    const addNewClient=()=>{
        navigate("new");
    }

    const [sortName,setSortName]=useState(false);

    const sortByName=()=>{
      setSortName(!sortName);
        if(sortName){
      let orderAsc = data.sort((a, b)=> a.name.localeCompare(b.name));
      localStorage.setItem("Team", JSON.stringify(orderAsc));
        }else{
      let orderDes = data.sort((a, b)=> b.name.localeCompare(a.name));
      localStorage.setItem("Team", JSON.stringify(orderDes));
        }
    }

  return (
<>
    <Flex w="80%" alignItems="center" justifyContent="space-between">
        <Box>
            <Text fontSize="4xl" fontWeight="semibold">Team Members</Text>
        </Box>
        <Box>
        <Button onClick={addNewClient} fontSize="16px" colorScheme='telegram'>+ New Team member</Button>
        </Box>
    </Flex>
    <Flex justifyContent="space-between" w="80%" my="20px">
        <Box>
            <Flex gap="15px" alignItems="center">
                <Box>
                <Input autoFocus width='275px'  placeholder='Search by Team member Name' size='md' />
                </Box>
                <Box>
                    <Menu>
                         <MenuButton as={Button}>
                           <Flex alignItems="center" gap="5px" color="rgb(55,93,117)">
                           <BiArchive/> Status
                           </Flex>
                         </MenuButton>
                         <MenuList>
                           <MenuItem>All</MenuItem>
                           <MenuItem>Archieved</MenuItem>
                           <MenuItem>Active</MenuItem>
                         </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
        <Box>
            <Button><CgExport/></Button>
        </Box>
    </Flex>
    <TableContainer>
  <Table variant='simple' w="80%">
    <Thead>
      <Tr>
        <Th><Button onClick={sortByName} color="rgb(102,102,102)" backgroundColor="transparent" size="sm" gap="5px">NAME{sortName?<BsArrowDown/>:<BsArrowUp/>}</Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm">ACTIVITY</Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm">EMAIL</Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm">LABOR RATE</Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm">BILLIABLE RATE</Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm">ROLE</Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm" gap="5px">STATUS<BsArrowUp/></Button></Th>
        <Th><Button color="rgb(102,102,102)" backgroundColor="transparent" size="sm">ACTION</Button></Th>
      </Tr>
    </Thead>
    <Tbody>
          {data.map((d)=><Tr key={d.id}><Td>{d.name}</Td><Td>View Activity</Td><Td>{d.email}</Td><Td><span>&#8377;</span>{d.LoborRate}</Td><Td><span>&#8377;</span>{d.BillableRate}</Td><Td>{d.Role}</Td><Td>Active</Td><Td>Edit</Td></Tr>)}
    </Tbody>
  </Table>
</TableContainer>
</>
  )
}

export default Team