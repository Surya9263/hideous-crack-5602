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

export default function Project() {
  return (
    <Box
      h={"92vh"}
      pt="30px"
      pr={"30px"}
      pl="30px"
      pb={"75px"}
      w={"1109px"}
      border="1px"
      borderColor="black"
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
              <Tr>
                <Td>Aman</Td>
                <Td>Sushant</Td>
                <Td isNumeric>25</Td>
                <Td>100</Td>
                <Td>50</Td>
                <Td>28-9-2022</Td>
                <Td display={"flex"} gap="5px">
                  <DeleteIcon />
                  <EditIcon />
                  <CopyIcon />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
