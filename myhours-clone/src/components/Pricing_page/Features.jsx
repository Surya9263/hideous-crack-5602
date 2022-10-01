import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { fdata } from "./PricingDatabase";
import { GrCheckmark } from "react-icons/gr";
import style from "./Pricing.module.css";

function Features() {
  return (
    <Box w={"100%"} pt="3rem">
      <Box textAlign="start" w={"95%"} m="auto">
        {/* <TableContainer> */}
        <Table variant="simple">
          <Thead>
            <Tr padding="1rem 0" >
              <Th border="none" textAlign={"start"} 
              fontSize="18px">
                Feature
              </Th>
              <Th fontSize="18px" p="0 2rem 0 - 1rem" border="none">
                {/* Free */}
              </Th>
              <Th fontSize="18px" p="0 2rem 0 -1rem" border="none">
                {/* Pro */}
              </Th>
            </Tr>
          </Thead>

          <Tbody width={"100%"}>
            {/* feature */}
            {fdata.map((data, i) => (
              <Box
                key={i}
                width={"110%"}
                m="auto"
               
              >

             
                <Tr className={style.bagcoltab}  boxShadow={"rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"}>
                  <Td border="none" fontWeight="600">
                    {data.title}
                  </Td>
                  <Td fontWeight="600" border="none">
                    Free
                  </Td>
                  <Td fontWeight="600" border="none">
                    Pro
                  </Td>
                  {/* <Td border="none" /> */}
                </Tr>

                {data.d.map((e) => (
                  <Tr key={e.title}>
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
              </Box>
            ))}
          </Tbody>
        </Table>
        {/* </TableContainer> */}
      </Box>
    </Box>
  );
}

export default Features;
