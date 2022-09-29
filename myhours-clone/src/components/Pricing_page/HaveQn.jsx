import { Box, Img } from "@chakra-ui/react";
import React from "react";
import style from "./Pricing.module.css";
// import { GrCheckmark } from "react-icons/gr";

function HaveQn() {
  return (
    <Box  w="100%" m="auto"  textAlign="center">
    
   
      <Box mt="0" mb="5px" fontSize="2rem" color="#375d75"lineHeight="1.2" fontWeight="600" >Have questions? We're here</Box>
    
  
      <Box w="60%" m="1rem auto"  color="#212529" fontSize="18px" lineHeight="1.5">
        It's always nice to have someone to talk to when facing new software.
        Get in touch and we'll try our best to help you out.
      </Box>

      
      <Box pl="1rem"width="70%" textAlign="center" display="flex" m="auto">
        <a href="#" className={style.link2}  >
       <Box display="flex">  <Img height="15" mt="0.2rem" mr="0.1rem" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg" loading="lazy" alt="Swish icon"/>EMAIL & LIVE CHAT</Box>
       </a>
        <a href="#" className={style.link2}>
            <Box display="flex">
            <Img mt="0.2rem" mr="0.1rem" height="15" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg" loading="lazy" alt="Swish icon"/>
            TRAINING FOR TEAMS
            </Box>
            </a>
        <a href="#" className={style.link2}><Box display="flex" > <Img mt="0.2rem" mr="0.1rem" height="15" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg" loading="lazy" alt="Swish icon"/> KNOWLEDGE BASE</Box></a>
      </Box>
        </Box>
  );
}

export default HaveQn;
