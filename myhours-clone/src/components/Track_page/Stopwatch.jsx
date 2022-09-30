import React, { useState } from 'react';
import { useStopwatch } from './useStopwatch';
import { TimeIcon } from '@chakra-ui/icons';
import { BsStopFill } from "react-icons/bs";
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const Stopwatch = () => {
  const { setStartTimer, setTime, time } = useStopwatch(0);
  const [start, setStart] = useState(false);
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
            }}>
            < BsStopFill  margin={'0.5em'} />
            Stop
          </Button>
        ) : (
          ''
        )}
        <Button
          colorScheme='green' variant='outline'
        
          _hover={{ bg: '#007500' ,color:'white'}}
          onClick={() => {
            setStartTimer(true);
            setStart(true);
          }}>
          <TimeIcon margin={'0.5em'} />
          {start ? 'Start New' : 'Start'}
        </Button>
        <Text>
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </Text>
      </Flex>
      {/*<button
        onClick={() => {
          setTime(0);
          setStartTimer(false);
        }}>
        Reset
      </button>*/}
    </Box>
  );
};