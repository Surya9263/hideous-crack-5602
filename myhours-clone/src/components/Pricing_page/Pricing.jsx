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
} from "@chakra-ui/react";
import { GrCheckmark } from "react-icons/gr";
import {
  fdata,
  FreeList,
  ProList,
  Frequently_asked_questions,
} from "./PricingDatabase";
import FAQ from "./FAQ";

function Pricing() {
  return (
    <Box
      maxW={["100%", "90%", "80%"]}
      style={{ height: "100vh", margin: "auto" }}
    >
      <Container>
        {/* headers */}
        <Box>
          <Text className={style.heading1}>Pick your plan</Text>
          <Heading className={style.heading2}>
            Track time on projects with your team.
          </Heading>
        </Box>
        {/* headers */}
        {/* lg md sm */}
        <SimpleGrid columns={[2,1]} gap="9rem">
          <Box>
            <Text className={style.heading3}>Free</Text>
            <Text className={style.heading4}>
              For indivisuals or teams just getting started with time tracking.
            </Text>

            <Text className={style.dollar1}>
              $<span className={style.dollar2}>0</span>
            </Text>

            <br />
            {/* <br /> */}

            <ul>
              {FreeList.map((e, i) => (
                <li className={style.list} key={i}>
                  {e}
                </li>
              ))}
            </ul>
            <Button style={{ marginTop: "4.5rem" }} className={style.pbtn}>
              Select
            </Button>
          </Box>
          <Box>
            <Text className={style.heading3}>Free</Text>
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

            <ul>
              {ProList.map((e, i) => (
                <li className={style.list} key={i}>
                  {i === 0 ? <i>{e}</i> : e}
                </li>
              ))}
            </ul>
            <Button className={style.pbtn2}>14 day free trial</Button>
          </Box>
        </SimpleGrid>
        {/* Features */}
        <Box textAlign="start" w={"100%"}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr padding="1rem 0">
                  <Th border="none" textAlign={"start"} w={"100%"}>
                    Feature
                  </Th>
                  <Th p="0 2rem" border="none">
                    Free
                  </Th>
                  <Th p="0 2rem" border="none">
                    Pro
                  </Th>
                </Tr>
              </Thead>

              <Tbody width={"100%"}>
                {/* feature */}

                {fdata.map((data) => (
                  <>
                    <Tr className={style.bagcoltab}>
                      <Td border="none" fontWeight="600">
                        {data.title}
                      </Td>
                      <Td border="none" />
                      <Td border="none" />
                    </Tr>

                    {data.d.map((e) => (
                      <Tr>
                        <Td>{e.title}</Td>
                        <Td textAlign={"center"} fontSize="1.3rem">
                          {e.free ? <GrCheckmark /> : ""}
                        </Td>
                        <Td textAlign={"center"} fontSize="1.3rem">
                          {e.pro ? <GrCheckmark /> : ""}
                        </Td>
                      </Tr>
                    ))}
                    <br />
                    <br />
                  </>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* FAQ */}
        <FAQ />
        {/* FAQ */}

      </Container>
    </Box>
  );
}

export default Pricing;
