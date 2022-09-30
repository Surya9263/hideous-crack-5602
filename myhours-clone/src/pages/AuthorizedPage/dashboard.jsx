import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import { MdOutlineTimer } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { Link } from "react-router-dom";


// mian function 
export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">

            <Link to="#"><BsGrid3X3GapFill/></Link>

            {/* logo ########### */}
             <Link to="#"> <Image
            w="120px"
            src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
            alt="Dan Abramov"
          /></Link>

      </Flex>
      <br />
      <Box color="rgb(167,184,194)" fontWeight="thin" >
        {/* link 1 ************************************************* */}

        <Link
          href="#"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color:"black"
            }}
          >
            <Icon
              mr="4"
              fontSize="20"
            //   _groupHover={{
            //     color: "white",
            //   }}
              as={MdOutlineTimer}
            />

            <Text>Track</Text>
          </Flex>
        </Link>

        {/* link 2 ************************************************* */}

        <Link
          href="#"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
                bg: "rgb(239,239,239)",
                color:"black"
              }}
          >
            <Icon
              mr="4"
              fontSize="20"
              as={CgToolbox}
            />

            <Text>Projects</Text>
          </Flex>
        </Link>

        {/* link 3 dropdown ************************************************* */}
      </Box>
    </Box>
  );
};


{
  /* <Box >
<Box display="flex" justifyContent="space-between" p="1rem">
  <Box></Box>
  <Box
    fontSize="1.3rem"
    color="grey"
    onClick={() => handleClick(e.id)}
  >
    <AiOutlineFolder />
  </Box>
</Box>
{e.status && <Box padding="0 2.5rem" fontSize="15px"  lineHeight="20px">{e.answer}</Box>}
</Box> */
}
