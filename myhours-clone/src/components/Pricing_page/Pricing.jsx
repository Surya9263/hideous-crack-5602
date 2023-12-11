import FAQ from "./FAQ";
import React from "react";
import HaveQn from "./HaveQn";
import Features from "./Features";
import { Link } from "react-router-dom";
import style from "./Pricing.module.css";
import BottomSection from "./BottomSection";
import ReadmoreSection from "./ReadmoreSection";
import { FreeList, ProList } from "./PricingDatabase";
import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";

function Pricing() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <Box width={isNotSmallerScreen ? "80%" : "95%"} style={{ margin: "auto" }}>
      <Box>
        <Box>
          <Text className={style.heading1}>Pick your plan</Text>
          <Heading className={style.heading2}>
            Track time on projects with your team.
          </Heading>
        </Box>

        <Flex
          className={style.priceheaderflex}
          gap={isNotSmallerScreen ? "9rem" : "4rem"}
          my={isNotSmallerScreen ? "2rem" : ".1rem"}
        >
          <Box className={style.pricef1}>
            <Text className={style.heading3}>Free</Text>
            <Text className={style.heading4}>
              For indivisuals or teams just getting started with time tracking.
            </Text>

            <Text className={style.dollar1}>
              $<span className={style.dollar2}>0</span>
            </Text>

            <br />
            <ul className={style.ul}>
              {FreeList.map((e, index) => (
                <li className={style.list} key={index}>
                  {e}
                </li>
              ))}
            </ul>
            <Link to="/signup">
              <Button bgColor="" className={style.pbtn}>
                Select
              </Button>
            </Link>
          </Box>
          <Box className={style.pricef2}>
            <Text className={style.heading3}>Pro</Text>
            <Text className={style.heading4}>
              For indivisuals or teams just getting started with time tracking.
            </Text>
            <Box style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <Box>
                {" "}
                <Text className={style.dollar1}>
                  $<span className={style.dollar2}>6</span>
                </Text>
              </Box>
              <Box
                fontWeight="600"
                color="GrayText"
                fontSize={!isNotSmallerScreen && "12px"}
              >
                <p>
                  <i>- per active team member, per month billed annually</i>
                </p>
                <p>
                  <i>- $7 billed monthly</i>
                </p>
              </Box>
            </Box>

            <ul className={style.ul}>
              {ProList.map((e, i) => (
                <li className={style.list} key={i}>
                  {i === 0 ? <i>{e}</i> : e}
                </li>
              ))}
            </ul>
            <Link to="/signup">
              <Button bgColor="#3b8fc2" className={style.pbtn2}>
                14 day free trial
              </Button>
            </Link>
          </Box>
        </Flex>

        <Features />

        <FAQ />

        <ReadmoreSection />

        <HaveQn />

        <BottomSection />
      </Box>
    </Box>
  );
}

export default Pricing;
