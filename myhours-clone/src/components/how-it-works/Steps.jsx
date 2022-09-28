import { Box, Flex, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Steps = ({ title, description, stepsImg }) => {
  return (
    <>
	<SimpleGrid columns={[1, 1, 2]} spacing={20} p={10} mt={20}  alignItems={'center'}>
	 <Img src={stepsImg} alt='' width={'90%'}/>
	   <Flex width={'90%'} gap={6} direction={'column'} alignItems='end'margin={'10%'}>
		<Heading fontSize={'30px'}>{title}</Heading>
		<Text fontSize='20px'>{description}</Text>
	   </Flex>
	</SimpleGrid>
    </>
  )
}

export default Steps;