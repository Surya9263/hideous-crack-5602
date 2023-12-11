import React from "react";
import style from "./Pricing.module.css";
import { fdata } from "./PricingDatabase";
import { GrCheckmark } from "react-icons/gr";
import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";

function Features() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <Box pt="3rem">
      <Box w={isNotSmallerScreen ? "95%" : "100%"} m="auto">
        <Table variant="simple" size={!isNotSmallerScreen ? 'sm' : 'md'}>
          <Thead>
            <Tr>
              <Th border="none" textAlign={"start"} fontSize="18px">
                Feature
              </Th>
            </Tr>
          </Thead>

          <Tbody >
            {fdata.map((data, i) => (
              <Box key={i}>
                <Tr
                  className={style.bagcoltab}
                  boxShadow={"rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"}
                >
                  <Td border="none" fontWeight="600">
                    {data.title}
                  </Td>
                  <Td fontWeight="600" border="none">
                    Free
                  </Td>
                  <Td fontWeight="600" border="none">
                    Pro
                  </Td>
                </Tr>

                {data.d.map((e) => (
                  <Tr key={e.title}>
                    <Td>{e.title}</Td>
                    <Td textAlign={"center"}>
                      {e.free ? (
                        <GrCheckmark
                          size={isNotSmallerScreen ? "1.3rem" : "1rem"}
                        />
                      ) : (
                        ""
                      )}
                    </Td>
                    <Td textAlign={"center"}>
                      {e.pro ? (
                        <GrCheckmark
                          size={isNotSmallerScreen ? "1.3rem" : "1rem"}
                        />
                      ) : (
                        ""
                      )}
                    </Td>
                  </Tr>
                ))}
                <br />
                <br />
              </Box>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default Features;
