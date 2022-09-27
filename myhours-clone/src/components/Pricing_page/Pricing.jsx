import React from "react";
import style from "./Pricing.module.css";
import { Box, Heading, Container, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { FreeList } from "./PricingDatabase";

function Pricing() {
  return (
    <Box maxW={["100%","90%","80%"]} style={{ height: "100vh",margin:"auto" }}>
      <Container >
        {/* headers */}
        <Box>
          <Text className={style.heading1}>Pick your plan</Text>
          <Heading className={style.heading2}>
            Track time on projects with your team.
          </Heading>
        </Box>
        {/* headers */}
        <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
          <Box  >
          <Text className={style.heading3}>Free</Text>
            <Text className={style.heading4} >
              For indivisuals or teams just getting started with time tracking.
            </Text>
            <br />
            <Text className={style.dollar1}>$<span className={style.dollar2}>0</span></Text>
            
            <br />
            {/* <br /> */}
            
            <ul>
              {FreeList.map((e, i) => (
                <li className={style.list} key={i}>{e}</li>
              ))}
            </ul>
            |<Button className={style.pbtn}>Select</Button>
          </Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Pricing;
