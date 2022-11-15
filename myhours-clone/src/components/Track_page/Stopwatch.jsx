import React, { useEffect, useState } from 'react';
import { useStopwatch } from './useStopwatch';
import { TimeIcon } from '@chakra-ui/icons';
import { BsStopFill } from "react-icons/bs";
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const Stopwatch = () => {

  const [start, setStart] = useState(false);
  const { setStartTimer, setTime, time } = useStopwatch(0);
  return (
    <Box>
      <Flex gap='4'>
        {start ? (
          <Button
          colorScheme='red' variant='outline'
            
            _hover={{ bg: '#cc0000', color: 'white' }}
            onClick={() => {
              setStartTimer(false);
              setStart(false);
              localStorage.setItem("time",time)
            }}>
            < BsStopFill  margin={'0.5em'} />
            Stop
          </Button>
        ) : ( '' )}
        <Button
          colorScheme='green' variant={start?'outline':"solid"} 
          _hover={{ bg: '#007500' ,color:'white'}}
          onClick={() => {
            setStartTimer(true);
            setStart(true);
          }}>
          <TimeIcon margin={'0.5em'} />
          {start ? 'Start New' : 'Start'}
        </Button>
        <Text>
            {/* feedback: fw18_1057 - use numeric constant file here*/}
          <span>{('0' + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 600) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 60)).slice(-2)}</span>
        </Text>
      </Flex>
      
    </Box>
  );
};
