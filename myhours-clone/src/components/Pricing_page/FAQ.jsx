import React, { useState } from "react";
import style from "./Pricing.module.css";
import { Box, Text } from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Frequently_asked_questions } from "./PricingDatabase";

function FAQ() {
  const [data, setdata] = useState(Frequently_asked_questions);
  function handleClick(id) {
    let updated = data.map((e) =>
      e.id === id ? { ...e, status: !e.status } : e
    );

    setdata(updated);
  }
  return (
    <Box
      mb="3rem"
      p=".5"
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}
      borderRadius="0.5rem"
    >
      <Box className={style.headFaq}>
        <Text>Frequently Asked Questions</Text>
      </Box>

      {data.map((e, i) => (
        <Box key={i}>
          <Box display="flex" justifyContent="space-between" p="1rem">
            <Box>{e.question}</Box>
            <Box
              fontSize="1.3rem"
              color="grey"
              onClick={() => handleClick(e.id)}
            >
              {e.status ? <FiChevronUp /> : <FiChevronDown />}
            </Box>
          </Box>
          {e.status && (
            <Box padding="0 2.5rem" fontSize="15px" lineHeight="20px">
              {e.answer}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default FAQ;
