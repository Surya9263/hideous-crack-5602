import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, TableCaption, Flex, Text, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import {MdSettings} from "react-icons/md";
import {FaCaretDown} from "react-icons/fa";  
import {HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown} from "react-icons/hi"; 
import { useNavigate} from 'react-router-dom';

const ClientData = ({newData}) => {
	var clientData = newData.length===0 ? JSON.parse(localStorage.getItem("clients")) || [] : newData;
	const check = clientData.length<=0;
	const [action, setAction] = useState(0);
	const [sortName, setSortName] = useState(false);
	const [sortContact, setSortContact] = useState(false);
	const [sortDetails, setSortDetails] = useState(false);
	const [sortStatus, setSortStatus] = useState(false);
	const navigate = useNavigate();
	
	// feedback: fw17_0078 - you can move this to utility function
	const sortByName=()=>{
		setSortName(!sortName);
	    if(sortName){
		let orderAsc = clientData.sort((a, b)=> a.name.localeCompare(b.name));
		localStorage.setItem("clients", JSON.stringify(orderAsc));
	    }else{
		let orderDes = clientData.sort((a, b)=> b.name.localeCompare(a.name));
		localStorage.setItem("clients", JSON.stringify(orderDes));
	    }
	}

	const sortByContact=()=>{
		setSortContact(!sortContact);
	    if(sortContact){
		let orderAsc = clientData.sort((a, b)=> a.phone.localeCompare(b.phone));
		localStorage.setItem("clients", JSON.stringify(orderAsc));
	    }else{
		let orderDes = clientData.sort((a, b)=> b.phone.localeCompare(a.phone));
		localStorage.setItem("clients", JSON.stringify(orderDes));
	    }
	}
	const sortByDetails=()=>{
		setSortDetails(!sortDetails);
	    if(sortDetails){
		let orderAsc = clientData.sort((a, b)=> a.email.localeCompare(b.email));
		localStorage.setItem("clients", JSON.stringify(orderAsc));
	    }else{
		let orderDes = clientData.sort((a, b)=> b.email.localeCompare(a.email));
		localStorage.setItem("clients", JSON.stringify(orderDes));
	    }
	}
	const sortByStatus=()=>{
		setSortStatus(!sortStatus);
	    if(sortStatus){
		let orderAsc = clientData.sort((a, b)=> a.status.localeCompare(b.status));
		localStorage.setItem("clients", JSON.stringify(orderAsc));
	    }else{
		let orderDes = clientData.sort((a, b)=> b.status.localeCompare(a.status));
		localStorage.setItem("clients", JSON.stringify(orderDes));
	    }
	}

	const deleteClient=(id)=>{
		let deleteData = clientData.filter((C)=> C.id !== id)
		localStorage.setItem("clients", JSON.stringify(deleteData));
		setAction(0)
	};

	const archiveClient = (id)=>{
		let updateClient=clientData.map((client)=>{
			if(client.id===id){
				let newObj=client;
				if(newObj.status==="Active"){
					newObj.status="Archived";
				}else{
					newObj.status="Active";
				}
				return newObj;
			}
			return client;
		})

		localStorage.setItem("clients", JSON.stringify(updateClient));
		setAction(0)
	};

	const editClient = (id) =>{ 
		navigate(id)
	};

  return (
    <>
    <TableContainer>
	<Table>
	  <Thead>
	    <Tr>
	     <Th><Flex alignItems={'center'} onClick={sortByName} cursor="pointer">
			NAME {sortName ? <HiOutlineArrowNarrowDown/>:<HiOutlineArrowNarrowUp/> }
	     </Flex></Th>
	     <Th><Flex alignItems={'center'} onClick={sortByContact} cursor="pointer">
	     CONTACT PERSON {sortContact ? <HiOutlineArrowNarrowDown/>:<HiOutlineArrowNarrowUp/> }
	     </Flex></Th>
	     <Th><Flex alignItems={'center'} onClick={sortByDetails} cursor="pointer">
	     CONTACT DETAILS {sortDetails ? <HiOutlineArrowNarrowDown/>:<HiOutlineArrowNarrowUp/> }
	     </Flex></Th>
	     <Th><Flex alignItems={'center'} onClick={sortByStatus} cursor="pointer">
	     STATUS {sortStatus ? <HiOutlineArrowNarrowDown/>:<HiOutlineArrowNarrowUp/> }
	     </Flex></Th>
	     <Th>ACTION</Th>
	    </Tr>
	  </Thead>
		{check ? (
		<TableCaption>No Clients found.</TableCaption>
		):(
	  <Tbody>
		{clientData.map((client, i)=>(
		    <Tr key={client.id}>
			<Td fontSize={'14px'}>{client.name}</Td>
			<Td fontSize={'14px'}>{client.phone}</Td>
			<Td fontSize={'14px'}>{client.email}</Td>
			<Td fontSize={'14px'}>{client.status}</Td>
			<Td>{action===i+1 ? (
				<Box borderRadius={4} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} onMouseLeave={()=> setAction(0)} position={'absolute'} bg={'white'}>
					<Flex cursor={'pointer'} alignItems='center' gap={.5} p={"5px 10px"}>
					<MdSettings color='gray'/>
					<FaCaretDown />
					</Flex>
					<Flex direction={'column'} fontSize={'14px'}>
						<Text cursor={'pointer'} _hover={{"bg": "rgb(221,239,250)"}} p={"3px 10px"} onClick={()=> editClient(client.id)}>Edit</Text>
						<Text cursor={'pointer'} _hover={{"bg": "rgb(221,239,250)"}} p={"3px 10px"} onClick={()=> archiveClient(client.id)}>{client.status==="Active" ? "Archived" : "Restore"}</Text>
						<Text cursor={'pointer'} _hover={{"bg": "rgb(221,239,250)"}} p={"3px 10px"} onClick={()=> deleteClient(client.id)}>Delete</Text>
					</Flex>
				</Box>
			):(
				<Flex cursor={'pointer'} alignItems='center' gap={.5} onClick={()=> setAction(i+1)}>
				<MdSettings color='gray'/>
				<FaCaretDown />
				</Flex>
			)}</Td>
		    </Tr>
		))}
	  </Tbody>
	    )}
	</Table>
    </TableContainer>
    </>
  )
}

export default ClientData;
