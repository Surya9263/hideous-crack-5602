import React, { useState } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { MdAdd, MdOutlineCloudDownload } from 'react-icons/md';
import { GrCircleQuestion } from 'react-icons/gr';
import SearchSortButton from '../../components/clients-page/SearchSortButton';
import ClientData from '../../components/clients-page/ClientData';
import { useNavigate } from 'react-router-dom';

const Clients = () => {
	var clientData = JSON.parse(localStorage.getItem("clients")) || [];
	const navigate=useNavigate();
	const [search, setSearch] = useState([]);

	const addNewClient = () =>{
		navigate("new")
	}

	const searchFilter = (e) =>{
		let sum=[]
		for(let i=0; i<clientData.length; i++){
			if(clientData[i].name===e.target.value || clientData[i].phone===e.target.value || clientData[i].email===e.target.value){
				sum.push(clientData[i]);
			}
		}
		setSearch(sum);
	}
	
  return (
    <>
    <Flex >
	{/* <Box width={'15.5%'} bg={'rgb(238,241,242)'}></Box> */}
	<Box width="100%" p={8}>
		<Flex justifyContent={'space-between'} margin={'auto'}>
			<Flex alignItems={'center'} gap={3} >
			<Text fontSize={'30px'} fontWeight={500} >Clients </Text>
			<GrCircleQuestion cursor='pointer'/>
			</Flex>
			<Button fontSize={'15px'} bg={'rgb(50,121,165)'} color='white' leftIcon={<MdAdd/>} onClick={addNewClient}>
				New Client 
			</Button>
		</Flex>
		<Flex mt={4} justifyContent='space-between'>
			<Flex gap={2} width={'83%'}>
			<Input placeholder='Search by Client name' width={'70%'} onChange={searchFilter}/>
			<SearchSortButton />
			</Flex>
			<Flex alignItems={'center'} bg={'rgb(221,239,250)'} p={"7px 15px"} borderRadius={5}>
			<MdOutlineCloudDownload fontSize={'25px'} cursor='pointer'/>
			</Flex>
      	</Flex>
		<Box mt={4}>
		<ClientData newData={search}/>
		</Box>
	</Box>
    </Flex>
    </>
  )
}

export default Clients;