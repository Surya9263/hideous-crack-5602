import {
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  DownloadIcon,
  DeleteIcon,
  EditIcon,
  CopyIcon,
} from "@chakra-ui/icons";
import styles from "./Project.module.css";
import { useState } from "react";
import AddNewProject from "./AddNewProject";

export default function Project() {

  const projectdata = JSON.parse(localStorage.getItem("project")) || []

  const [data, setData] = useState(projectdata)
  const handleDelete = (id) => {
       const newprojectdata = projectdata.filter(elem=>{
             return elem.id != id
       })

       localStorage.setItem("project",JSON.stringify(newprojectdata))
       setData(newprojectdata)
  }

  return (
    <>
    <Box
      h={"auto"}
      pt="30px"
      pr={"30px"}
      pl="30px"
      pb={"75px"}
      w={"100%"}
      border="1px"
      borderColor="gray.300"
    >
      <Box h={"100%"} border="1px" borderColor="white">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontWeight="600" fontSize="4xl">
            Projects
          </Text>
          <Button colorScheme="blue">Add new project</Button>
        </Box>

        <Box display={"flex"} justifyContent="space-between">
          <Box
            display={"flex"}
            gap="10px"
            w={"60%"}
            border={"1px"}
            borderColor="white"
          >
            <Input
              border={"1px"}
              borderColor="gray.300"
              w={"300px"}
              type="text"
              placeholder="Search by Project or Client name"
            />
            <Menu>
              <MenuButton
                colorScheme="white"
                color={"black"}
                border="1px"
                borderColor={""}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Status
              </MenuButton>
              <MenuList>
                <MenuItem>All</MenuItem>
                <MenuItem>Archived</MenuItem>
                <MenuItem>Active</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Box
            w={"40%"}
            border={"1px"}
            borderColor="white"
            display={"flex"}
            gap="20px"
            justifyContent={"end"}
          >
            <Button
              colorScheme="white"
              color={"black"}
              border="1px"
              borderColor={"gray.300"}
              rightIcon={<DownloadIcon />}
            >
              Export
            </Button>
            <Menu>
              <MenuButton
                colorScheme="white"
                color={"black"}
                border="1px"
                borderColor={"gray.300"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Group by
              </MenuButton>
              <MenuList>
                <MenuItem>None</MenuItem>
                <MenuItem>Client</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <TableContainer>
          <Table variant="simple">
            <TableCaption></TableCaption>
            
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>CLIENT</Th>
                <Th isNumeric>TOTAL HOURS</Th>
                <Th>BILLABLE AMOUNT</Th>
                <Th>SPEND</Th>
                <Th>CREATED</Th>
                <Th>ACTION</Th>
              </Tr>
            </Thead>

            <Tbody>
              { 
              data.map((elem)=> <Tr>
              <Td>{elem.projectName}</Td>
              <Td>{elem.client}</Td>
              <Td  isNumeric >{elem.hours}</Td>
              <Td>{elem.billamount}</Td>
              <Td>0</Td>
              <Td>{elem.date}-{+elem.month + 1}-{elem.year}</Td>
              <Td display={"flex"} gap="5px">
                <DeleteIcon cursor={"pointer"} onClick={()=>handleDelete(elem.id)} />
                {/* <EditIcon /> */}
                {/* <CopyIcon /> */}
              </Td>
            </Tr>
              
              
              
              )
             }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>

    <AddNewProject setData={setData}/>
    </>
  );
}
