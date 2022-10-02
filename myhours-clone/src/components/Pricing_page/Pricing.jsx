import React from "react";
import style from "./Pricing.module.css";
import {
  Box,
  Heading,
  Container,
  Text,
  SimpleGrid,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
} from "@chakra-ui/react";
import { fdata, FreeList, ProList } from "./PricingDatabase";
import FAQ from "./FAQ";
import ReadmoreSection from "./ReadmoreSection";
import HaveQn from "./HaveQn";
import BottomSection from "./BottomSection";
import Features from "./Features";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <Box width="80%" style={{ margin: "auto" }}>
      <Box>
        {/* headers */}
        <Box>
          <Text className={style.heading1}>Pick your plan</Text>
          <Heading className={style.heading2}>
            Track time on projects with your team.
          </Heading>
        </Box>
        {/* headers */}
        {/* lg md sm */}
        <Flex className={style.priceheaderflex} gap="9rem" m="2rem 0">
          <Box className={style.pricef1}>
            <Text className={style.heading3}>Free</Text>
            <Text className={style.heading4}>
              For indivisuals or teams just getting started with time tracking.
            </Text>

            <Text className={style.dollar1}>
              $<span className={style.dollar2}>0</span>
            </Text>

            <br />
            {/* <br /> */}

            <ul className={style.ul}>
              {FreeList.map((e, i) => (
                <li className={style.list} key={i}>
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
              <Box style={{ fontWeight: "600", color: "GrayText" }}>
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
        {/* Features */}
        <Features />
        {/* FAQ */}
        <FAQ />

        {/* readmore */}
        <ReadmoreSection />

        {/* having qn */}
        <Box m="10rem 0">
          <HaveQn />
        </Box>

        {/* bottom part */}
        <BottomSection />
      </Box>
    </Box>
  );
}

export default Pricing;
