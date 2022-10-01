import React from 'react';
import { Input, Text, Box, Flex, Textarea, Button } from "@chakra-ui/react";
import { GrCircleQuestion } from 'react-icons/gr';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const AddClient = () => {
  var clientData = JSON.parse(localStorage.getItem("clients")) || [];
  const navigate = useNavigate();
  const loading = false;
  const [addClients, setAddClients] = useState({});

  const onChange = (e)=>{
    const { name, value } = e.target;

    setAddClients({
      ...addClients,
      [name]: value,
      ["status"]: "Active",
      ["id"]: uuid(),
    });
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    clientData.push(addClients);
    localStorage.setItem("clients", JSON.stringify(clientData));
    navigate('/clients');
  }

  const onCancel=()=>{
    navigate('/clients');
  }

  return (
    <>
    <Flex backgroundColor="rgb(245,245,245)" >
    
	  <Box width="100%" p={8} >
    <form>
      <Box width={'49%'} margin={'auto'}>
        <Flex alignItems={'center'} gap={3}>
          <Text fontSize={'30px'} >New client </Text>
          <GrCircleQuestion cursor='pointer'/>
        </Flex>
        <Box mt={4} fontSize={'14px'}>
          <Text>NAME</Text>
          <Input size='md' borderRadius={6} type="text" name='name' required onChange={onChange} bg="white" />
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>CONTACT PERSON</Text>
          <Input size='md' borderRadius={6} type="text" name='contactPerson' onChange={onChange} bg="white" />
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>EMAIL</Text>
          <Input size='md' borderRadius={6} type="email" name='email' required onChange={onChange} bg="white" />
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>PHONE</Text>
          <Input size='md' borderRadius={6} type='number' name='phone' onChange={onChange} bg="white" />
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>ADDRESS</Text>
          <Textarea onChange={onChange} name='address' bg="white"  />
        </Box>
        <br/>
        <hr/>
        <Flex mt={4} fontSize={'14px'} justifyContent={'space-between'}>
          <Box>
          <Text>TAX NAME</Text>
          <Input size='md' borderRadius={6} type='text' onChange={onChange} name='taxName' bg="white" />
          </Box>
          <Box>
          <Text>TAX PERCENTAGE</Text>
          <Input size='md' borderRadius={6} type='number' onChange={onChange} name='taxPercentage' bg="white" />
          </Box>
        </Flex>
        <Box mt={4} fontSize={'14px'}>
          <Text>TAX NUMBER</Text>
          <Input size='md' borderRadius={6} type='number' name='taxNumber' onChange={onChange} bg="white" />
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

export default AddClient;