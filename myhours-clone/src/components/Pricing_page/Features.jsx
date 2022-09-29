import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { fdata } from './PricingDatabase'
import { GrCheckmark } from "react-icons/gr";
import style from "./Pricing.module.css";


function Features() {
  return (
   
    <Box>
         <Box textAlign="start">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr padding="1rem 0">
                  <Th border="none" textAlign={"start"} fontSize="18px">
                    Feature
                  </Th>
                  <Th fontSize="18px" p="0 2rem 0 - 1rem" border="none">
                    Free
                  </Th>
                  <Th fontSize="18px" p="0 2rem 0 -1rem" border="none">
                    Pro
                  </Th>
                </Tr>
              </Thead>

              <Tbody width={"100%"}>
                {/* feature */}

                {fdata.map((data,i) => (
                  <Box key={i}>
                    <Tr className={style.bagcoltab}>
                      <Td border="none" fontWeight="600">
                        {data.title}
                      </Td>
                      <Td border="none" />
                      <Td border="none" />
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
          </TableContainer>
        </Box>

    </Box>
  )
}

export default Features