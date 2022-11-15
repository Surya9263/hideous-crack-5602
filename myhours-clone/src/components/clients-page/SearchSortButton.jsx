import React, { useState } from 'react';
import { BsInbox } from 'react-icons/bs';
import { Popover, PopoverContent, PopoverTrigger, Button, Flex, Text} from '@chakra-ui/react';

const SearchSortButton = () => {
	const [searchFilter, setSearchFilter] = useState("Status");

	const operationSearchFilter = (searchBy) =>{
		setSearchFilter(searchBy);
		// sortFun(searchBy);
	};

	
  return (
    <>
    <Popover>
	<PopoverTrigger>
       <Button variant={'outline'}><BsInbox /> &nbsp;&nbsp; {searchFilter}</Button>
	</PopoverTrigger>
	<PopoverContent width={'150px'}>
	 <Flex direction={'column'}>
		 {/* feedback: fw17_0078 - use loop for text, they seem similar except the text passed to them */}
		<Text _hover={{"bg": "rgb(240,241,242)"}} bg={(searchFilter === "Status") ? "rgb(221,239,250)": "none"} p={"8px 15px"} onClick={()=> operationSearchFilter('Status')} cursor={'pointer'}>All</Text>
		<Text _hover={{"bg": "rgb(240,241,242)"}} bg={(searchFilter === "Archived") ? "rgb(221,239,250)": "none"} p={"8px 15px"} onClick={()=> operationSearchFilter('Archived')} cursor={'pointer'}>Archived</Text>
		<Text _hover={{"bg": "rgb(240,241,242)"}} bg={(searchFilter === "Active") ? "rgb(221,239,250)": "none"} p={"8px 15px"} onClick={()=> operationSearchFilter('Active')} cursor={'pointer'}>Active</Text>	
	 </Flex>
	</PopoverContent>
	</Popover>
    </>
  )
}

export default SearchSortButton
