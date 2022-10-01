import { Button, Heading, Img, Box, Text } from '@chakra-ui/react'
import React from 'react'

const AllHours = () => {
  return (
    <>
    <Box width={'50%'} margin={'auto'} mt={8}>
	<Heading fontSize={'26px'} fontWeight={500}>Clocking in and out - All Hours</Heading>
	<Text mt={6}>Plan shifts and track attendance with simple clock-in events through your browser, the mobile app or even a physical time terminal.</Text>
	<Box mt={8}>
		<li>Calculate overtime and other bonuses automatically.</li>
		<li>Let employees request absences from their managers through approval workflows.</li>
		<li>Customize reports and export all gathered data for payroll with a press of a button.</li>
	</Box>
	<Button mt={8} bg='rgb(59,143,194)' color={'white'}>Start free trial</Button>
	<Img src='https://allhoursproductb0b1.blob.core.windows.net/static-files/ac1ca77c-9cc4-429d-97c4-db14236e87e1/discover-screen-1' alt='' mt={10}/>
    </Box>
    </>
  )
}

export default AllHours