import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        backgroundColor="white"
        >
            
        <Stack spacing={5} mx={'auto'} maxW={'lg'} py={7} px={16} boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" margin="20"   >
          <Stack  >
           
            <Image
    
      w="170px"
    src='https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg'
    alt='Dan Abramov'
  />      <br />
            <Text fontSize="30px" fontWeight='bold' color={'black'}>
            Welcome to My Hours
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box w="100%">
                  <FormControl id="fullname" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <p style={{float:"left",fontWeight:"2000",fontSize:"12px"}}>So we know what to call you in the app</p>
                    {/* //************************************************************************  */}
                    <Input type="text" />
                  </FormControl>
                </Box>
               
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <p style={{float:"left",fontWeight:"2200",fontSize:"12px"}}>You will use this email to login</p>
                    {/* //********************************************************************************  */}
                 
                <Input type="email" />

              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    {/* //***********************************************************************  */}
                 
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <p>By signing up you agree to the <Link color={"blue.400"}>Terms of Use</Link> </p>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }