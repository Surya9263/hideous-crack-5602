import React from "react";
import style from "./Pricing.module.css";
import { Box, Img, useMediaQuery } from "@chakra-ui/react";

function HaveQn() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Box textAlign="center" my={isNotSmallerScreen ? "10rem" : "4rem"}>
      <Box
        mt="0"
        mb="5px"
        fontSize="2rem"
        color="#375d75"
        lineHeight="1.2"
        fontWeight="600"
      >
        Have questions? We're here
      </Box>

      <Box
        className={style.haveqnhead}
        m="1rem auto"
        color="#212529"
        fontSize="18px"
        lineHeight="1.5"
      >
        It's always nice to have someone to talk to when facing new software.
        Get in touch and we'll try our best to help you out.
      </Box>

      <Box
        className={style.haveqnlinks}
        pl="1rem"
        display="flex"
        textAlign="center"
      >
        {["EMAIL & LIVE CHAT","TRAINING FOR TEAMS","KNOWLEDGE BASE"].map(
          (el,index) => (
            <a href="#" key={index} className={style.link2}>
              <Box display="flex">
                <Img
                  height="15"
                  mt="0.2rem"
                  mr="0.1rem"
                  src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60993947b9ccc660783a8425_vectorpaint%20(1).svg"
                  loading="lazy"
                  alt="Swish icon"
                />
                {el}
              </Box>
            </a>
          )
        )}
      </Box>
    </Box>
  );
}

export default HaveQn;
