import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const Help = () => {
  const helptiket = [
    {
      icons: "FaPaperPlane",
      head: "QUICK START GUIDE for administrators",
      discretion:
        "Quickly set up your account and start tracking time on your projects.",
      img: "https://static.intercomassets.com/avatars/860617/square_128/64802_518111424878773_682984696_n-1479911486.jpg",
      t1: "5 articles in this collection",
      t2: "Written by Nina Janza and Miha Stanovnik",
    },
    {
      icons: "",
      head: "Tutorial for administrators",
      discretion: "Let our project manager Miha help you get started!",
      img: "https://static.intercomassets.com/avatars/860617/square_128/64802_518111424878773_682984696_n-1479911486.jpg",
      t1: "Written by Nina Janza",
      t2: "Updated over a week ago",
    },
    {
      icons: "",
      head: "QUICK START GUIDE for team members",
      discretion: "Learn how to track your time in My Hours.",
      img: "https://static.intercomassets.com/avatars/860617/square_128/64802_518111424878773_682984696_n-1479911486.jpg",
      t1: "3 articles in this collection",
      t2: "Written by Nina Janza",
    },
    {
      icons: "",
      head: "QUICK START GUIDE for administrators",
      discretion:
        "Quickly set up your account and start tracking time on your projects.",
      img: "https://static.intercomassets.com/avatars/860617/square_128/64802_518111424878773_682984696_n-1479911486.jpg",
      t1: "5 articles in this collection",
      t2: "Written by Nina Janza and Miha Stanovnik",
    },
    {
      icons: "",
      head: "Tutorial for administrators",
      discretion: "Let our project manager Miha help you get started!",
      img: "https://static.intercomassets.com/avatars/860617/square_128/64802_518111424878773_682984696_n-1479911486.jpg",
      t1: "Written by Nina Janza",
      t2: "Updated over a week ago",
    },
    {
      icons: "FaPaperPlane",
      head: "QUICK START GUIDE for team members",
      discretion: "Learn how to track your time in My Hours.",
      img: "https://static.intercomassets.com/avatars/860617/square_128/64802_518111424878773_682984696_n-1479911486.jpg",
      t1: "3 articles in this collection",
      t2: "Written by Nina Janza",
    },
  ];

  return (
    <Flex>
      <Box width="100%" >

        <Box backgroundColor="rgb(59,143,194)" width="100%" height="auto" >
            <br />
          <Box width="60%" margin="auto" color="white" >
            <Flex justifyContent="space-between">
              <Image
                w="170px"
                src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
                alt="Dan Abramov"
              />
              <Flex alignItems="center">
                <BiLinkExternal size="25px" /> &nbsp;&nbsp;{" "}
                <Text>Go to My Hours</Text>
              </Flex>
            </Flex>
            <br />
            <Text fontSize="28px">
              Advice and answers from the My Hours Team
            </Text>
            <br />
            <InputGroup variant="filled">
              <InputLeftElement
                marginTop="10px"
                marginLeft="10px"
                pointerEvents="none"
                children={<BsSearch color="gray.300" size="30px" />}
              />
              <Input type="text" height="63px" />
            </InputGroup>
            <br />
            <br />
          </Box>
          {/*  */}
        </Box>
        <br />
        <Box width="60%" margin="auto">
          {helptiket.map((i) => (
            <div style={{ display: "flex", marginBottom:"19px",padding: "18px" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <div style={{width:"20%",padding: "45px"}}>
                <FaPaperPlane size="40px" />
              </div>
              <div style={{width:"80%"}}>
                 <h2 style={{fontSize:"20px" ,color:"rgb(59,143,194)"}}>{i.head}</h2>
                 <h3>{i.discretion}</h3>
                    <br />
                 <div style={{ display: "flex" ,gap:"20px"}}>
                      <img src={i.img} alt="gcfjhisdg" width="40" height="32" style={{borderRadius:"50%",marginLeft:"5px"}} /> 
                       <div>
                          <h6>{i.t1}</h6>
                          <h6>{i.t2}</h6>
                       </div>
                 </div>
              </div>
            </div>
          ))}
        </Box>

         <br />

         <Box backgroundColor="rgb(239,239,239)" width="100%" height="auto" >
            <br />
          <Box width="60%" margin="auto" color="white" alignItems="center" >
           
              <Image
                w="170px"
                src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
                alt="Dan Abramov"
              />
             
            <br />
            <Text fontSize="28px">
              Advice and answers from the My Hours Team
            </Text>
            
            
          </Box>
          {/*  */}
        </Box>
          
      </Box>
    </Flex>
  );
};

export default Help;
