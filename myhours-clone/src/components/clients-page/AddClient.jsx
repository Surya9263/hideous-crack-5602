import React from 'react';
import { Input, Text, Box, Flex, Heading,Textarea, Button } from "@chakra-ui/react";
import { GrCircleQuestion } from 'react-icons/gr';

const AddClient = () => {
  return (
    <>
    <Flex height={'100vh'} justifyContent='space-between'>
    <Box width={'15.5%'} bg={'rgb(238,241,242)'}></Box>
	  <Box width={'84.5%'} p={8}>
    <form>
      <Box width={'49%'} margin={'auto'}>
        <Flex alignItems={'center'} gap={3}>
          <Text fontSize={'30px'} >New client </Text>
          <GrCircleQuestion cursor='pointer'/>
        </Flex>
        <Box mt={4} fontSize={'14px'}>
          <Text>NAME</Text>
          <Input size='md' borderRadius={6} type="text" required/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>CONTACT PERSON</Text>
          <Input size='md' borderRadius={6} type="text"/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>EMAIL</Text>
          <Input size='md' borderRadius={6} type="email" required/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>PHONE</Text>
          <Input size='md' borderRadius={6} type='number'/>
        </Box>
        <Box mt={4} fontSize={'14px'}>
          <Text>ADDRESS</Text>
          <Textarea />
        </Box>
        <br/>
        <hr/>
        <Flex mt={4} fontSize={'14px'} justifyContent={'space-between'}>
          <Box>
          <Text>TAX NAME</Text>
          <Input size='md' borderRadius={6} type='text'/>
          </Box>
          <Box>
          <Text>TAX PERCENTAGE</Text>
          <Input size='md' borderRadius={6} type='number'/>
          </Box>
        </Flex>
        <Box mt={4} fontSize={'14px'}>
          <Text>TAX NUMBER</Text>
          <Input size='md' borderRadius={6} type='number'/>
        </Box>
        <Flex mt={4} gap={4}>
          <Button bg="rgb(129,183,217)" color={"white"}>Save</Button>
          <Button bg="rgb(221,239,250)">Cancel</Button>
        </Flex>
      </Box>
    </form>
    </Box>
    </Flex>
    </>
  )
}

export default AddClient;