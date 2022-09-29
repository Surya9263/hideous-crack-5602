import { Flex, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';

const Steps = ({ title, description, stepsImg }) => {
  return (
    <>
	<Flex direction={['column-reverse', 'row']} mt={10} p={8} justifyContent={'space-between'}>
	 <Img src={stepsImg} alt='' width={['100%', '44%']}/>
	   <Flex width={['100%','40%']} gap={6} direction={'column'} justifyContent='center'>
		<Heading fontSize={'30px'}>{title}</Heading>
		<Text fontSize='20px'>{description}</Text>
	   </Flex>
	</Flex>
    </>
  )
}

export default Steps;