import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';

const Supports = ({ title, description, supportImg }) => {
  return (
    <>
	<Box width={'100%'}>
	 <Heading fontSize={'30px'} fontWeight={500}>{title}</Heading>
	 <Text fontSize='20px' mt={6}>{description}</Text>
	 <Img src={supportImg} alt='' width={['95%','70%']} margin='auto' mt={8}/>
	</Box>
    </>
  )
}

export default Supports;