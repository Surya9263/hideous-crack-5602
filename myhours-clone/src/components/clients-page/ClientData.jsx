import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, TableCaption } from '@chakra-ui/react';
import React from 'react';

const ClientData = () => {
	const check = false;

  return (
    <>
    <TableContainer>
	<Table>
	  <Thead>
	    <Tr>
	     <Th>NAME</Th>
	     <Th>CONTACT PERSON</Th>
	     <Th>CONTACT DETAILS</Th>
	     <Th>STATUS</Th>
	     <Th>ACTION</Th>
	    </Tr>
	  </Thead>
		{check ? (
		<TableCaption>No Clients found.</TableCaption>
		):(
	  <Tbody>
		<Tr>
		<Td>Dinesh</Td>
		<Td>fdf</Td>
		<Td>fsdsd@gmil</Td>
		<Td>Acive</Td>
		<Td>Edit</Td>
	    </Tr>
	    <Tr>
		<Td>Dinesh1</Td>
		<Td>fdfF</Td>
		<Td>fsdsDFd@gmil</Td>
		<Td>Acive</Td>
		<Td>Edit</Td>
	    </Tr>
	  </Tbody>
	    )}
	</Table>
    </TableContainer>
    </>
  )
}

export default ClientData;