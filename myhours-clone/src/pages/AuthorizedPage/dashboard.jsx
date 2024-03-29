import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import styles from "./dashboard.module.css";
import { MdOutlineTimer } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { BsBell, BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";
import { FiHelpCircle } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Apps from "./Apps";
import AccountSetting from "./AcountSetting";
import AllInnerRoutes from "../../InnerRoutes/AllInnerRoutes"
import { useDispatch } from "react-redux";
import { logout } from "../../Store/auth/auth.actions";


// mian function
export default function SimpleSidebar() {
  return (
    <Box minH="100vh" backgroundColor="rgb(255,255,255)">
      <SidebarContent display={{ base: "none", md: "block" }} />

      <Box ml={{ base: 0, md: 60 }} p="4"  > 


       {/* ************************************* YOU CAN ADD COMPONENTS below HERE ********************************************* */}
         
         <AllInnerRoutes/>

      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
 
  const dispatch = useDispatch();
  const navigate =useNavigate()

  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Mycred'));
    if (items) {
     setItems(items);
    }
  }, [items]);
 
  
  const handleLogout = ()=>{
    dispatch(logout())
    // navigate('/')
    
  }


  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      overflowY="scroll"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to="/allHours" target="_blank" >
          <BsGrid3X3GapFill />
        </Link>

        {/* logo ########### */}
        <Link to="/login/">
          <Image
            w="120px"
            src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
            alt="Dan Abramov"
          />
        </Link>
      </Flex>

      <Box
        color="rgb(167,184,194)"
        fontWeight="thin"
        
      >
        {/* link 1 ************************************************* */}

        <Link
           to="/login/"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
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
          to="/projects"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
            }}
          >
            <Icon mr="4" fontSize="20" as={CgToolbox} />

            <Text>Projects</Text>
          </Flex>
        </Link>

        {/* link 3 dropdown ************************************************* */}
        <div className={styles.dropdown}>
          <Link to="/projects">
            {" "}
            <div
              className={styles.btn}
              onClick={() => setIsActive1(!isActive1)}
            >
              {/* feedback: fw17_0915 and fw18_1057 - try to optimise how to give multiple spaces*/}
              <GoGraph />
              Reports
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ▼
            </div>{" "}
          </Link>

          {isActive1 && (
            <div className={styles.content}>
              <Link to="#">
                <div className={styles.item}>Dashboard</div>{" "}
              </Link>
              <Link to="#">
                <div className={styles.item}>Team pivot</div>{" "}
              </Link>
              <Link to="#">
                <div className={styles.item}>Activity</div>{" "}
              </Link>
              <Link to="#">
                <div className={styles.item}>Economy</div>{" "}
              </Link>
              <Link to="#">
                <div className={styles.item}>Timesheet</div>{" "}
              </Link>
            </div>
          )}
        </div>

        <div className={styles.dropdown}>
          <Link to="/clients">
            {" "}
            <div
              className={styles.btn}
              onClick={() => setIsActive2(!isActive2)}
            >
              <AiOutlineFolder />
              Clients
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ▼
            </div>{" "}
          </Link>

          {isActive2 && (
            <div className={styles.content}>
              <Link to="#">
                <div className={styles.item}>Clients</div>{" "}
              </Link>
              <Link to="#">
                <div className={styles.item}>Invoices</div>{" "}
              </Link>
              <Link to="#">
                <div className={styles.item}>Uninvoiced</div>{" "}
              </Link>
            </div>
          )}
        </div>

        <div className={styles.dropdown}>
          <Link to="/users">
            {" "}
            <div
              className={styles.btn}
              onClick={() => setIsActive3(!isActive3)}
            >
              <RiTeamLine />
              Team
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ▼
            </div>{" "}
          </Link>

          {isActive3 && (
            <div className={styles.content}>
              <Link to="/users">
                {" "}
                <div className={styles.item}>Team members</div>{" "}
              </Link>
              <Link to="/users">
                {" "}
                <div className={styles.item}>Teams</div>{" "}
              </Link>
            </div>
          )}
        </div>

        <br />
        <br />

        <Box
          backgroundColor="rgb(220,238,250)"
          color="rgb(74,110,132)"
          padding="14px"
        >
          <Text>
            Pro trial expires in 11 <br /> days.
          </Text>
          <Text fontSize="22px" textDecoration="underline">
            {" "}
            <Link to="#">Keep/leave the Pro</Link>{" "}
          </Text>
        </Box>

        {/* link down *****************************   ***************************************       ****************************************************/}

        <Link
          to="/help"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
            }}
          >
            <Icon mr="4" fontSize="20" as={FiHelpCircle} />

            <Text>Helps</Text>
          </Flex>
        </Link>

        {/* link down 2 *****************************   ***************************************       ****************************************************/}

        <Link
           to="/apps"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
            }}
          >
            <Icon mr="4" fontSize="20" as={MdOutlinePhoneIphone} />

            <Text>Apps</Text>
          </Flex>
        </Link>

        {/* link down 3 *****************************   ***************************************       ****************************************************/}

        <Link
          to="/whatNew"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
            }}
          >
            <Icon mr="4" fontSize="20" as={BsBell} />

            <Text>What's New</Text>
          </Flex>
        </Link>

        {/* link down 4 *****************************   ***************************************       ****************************************************/}

        <Link
          to="/accountSetting"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
            }}
          >
            <Icon mr="4" fontSize="20" as={AiOutlineSetting} />

            <Text>Account setting </Text>
          </Flex>
        </Link>

        {/* link down 5 *****************************   ***************************************       ****************************************************/}

        <Link
          to="/UserCreds"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="3"
            mx="2"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "rgb(239,239,239)",
              color: "black",
            }}
          >
            <Icon mr="4" fontSize="20" as={FaRegUser} />

            <Button  colorScheme='pink' variant='solid' onClick={handleLogout} >
  Log out
  </Button>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};
