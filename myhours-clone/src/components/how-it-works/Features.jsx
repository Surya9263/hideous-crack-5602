import { Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';

const Features = ({ title, description, featuresImg }) => {
  return (
    <>
    <Box>
	<Box p={10} mt={20}>
	<Heading fontSize={'30px'}>{title}</Heading>
	<Text mt={6} fontSize='20px'>{description}</Text>
	</Box>
	<Img src={featuresImg} alt=''/>
    </Box>
    </>
  )
}

export default Features;