import React from 'react';
import { Input, Text, Box, Flex, Textarea, Button } from "@chakra-ui/react";
import { GrCircleQuestion } from 'react-icons/gr';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditClient = () => {
	var clientData = JSON.parse(localStorage.getItem("clients")) || [];
	const params = useParams();
	const navigate = useNavigate();
	let newObj;

	clientData.map((client)=>{
		if(client.id===params.id){
			newObj=client;
		}
		return newObj;
	});

  const loading = false;
  const [editClients, setEditClients] = useState(newObj);

  const onChange = (e)=>{
    const { name, value } = e.target;

    setEditClients({
      ...editClients,
      [name]: value,
    });
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    let updateClient=clientData.map((client)=>{
	if(client.id===params.id){
		return editClients;
	}
	return client;
   });

    localStorage.setItem("clients", JSON.stringify(updateClient));
    navigate('/clients');
  };

  const onCancel=()=>{
    navigate('/clients');
  };

  return (
    <>
    <Flex height={'100vh'} justifyContent='space-between'>
    <Box width={'15.5%'} bg={'rgb(238,241,242)'}></Box>
	<Box width={'84.5%'} p={8}>
      <form>
      <Box width={'49%'} margin={'auto'}>
        <Flex alignItems={'center'} gap={3}>
          <Text fontSize={'30px'} >Edit client </Text>
          <GrCircleQuestion cursor='pointer'/>
        </Flex>
        <Box mt={4} fontSize={'14px'}>
          <Text>NAME</Text>
          <Input size='md' value={editClients.name} borderRadius={6} type="text" name='name' required onChange={onChange}/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>CONTACT PERSON</Text>
          <Input size='md' borderRadius={6} value={editClients.contactPerson} type="text" name='contactPerson' onChange={onChange}/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>EMAIL</Text>
          <Input size='md' value={editClients.email} borderRadius={6} type="email" name='email' required onChange={onChange}/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>PHONE</Text>
          <Input size='md' value={editClients.phone} borderRadius={6} type='number' name='phone' onChange={onChange}/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>ADDRESS</Text>
          <Textarea value={editClients.address} onChange={onChange} name='address' />
        </Box>
        <br/>
        <hr/>
        <Flex mt={4} fontSize={'14px'} justifyContent={'space-between'}>
          <Box>
          <Text>TAX NAME</Text>
          <Input size='md' value={editClients.taxName} borderRadius={6} type='text' onChange={onChange} name='taxName'/>
          </Box>
          <Box>
          <Text>TAX PERCENTAGE</Text>
          <Input size='md' value={editClients.taxPercentage} borderRadius={6} type='number' onChange={onChange} name='taxPercentage'/>
          </Box>
        </Flex>
        <Box mt={4} fontSize={'14px'}>
          <Text>TAX NUMBER</Text>
          <Input size='md' value={editClients.taxNumber} borderRadius={6} type='number' name='taxNumber' onChange={onChange}/>
        </Box>
        <Flex mt={4} gap={4}>
          <Button isLoading={loading} bg="rgb(129,183,217)" color={"white"} onClick={onSubmit}>Save</Button>
          <Button bg="rgb(221,239,250)" onClick={onCancel}>Cancel</Button>
        </Flex>
      </Box>
    </form>
    </Box>
    </Flex>
    </>
  )
}

export default EditClient;