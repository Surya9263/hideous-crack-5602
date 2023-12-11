import {
  Box,
  Flex,
  Text,
  Input,
  Image,
  Stack,
  HStack,
  Button,
  FormLabel,
  InputGroup,
  FormControl,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";
import Success from "./Success";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Store/auth/auth.actions";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
  const [creds, setCreds] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  const dispatch = useDispatch();
  const { error, loading, token, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user signup creds", creds);
    dispatch(signup(creds));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  if (success) {
    return <Success />;
  } else
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        backgroundColor="white"
      >
        <Stack
          spacing={isNotSmallerScreen ? "5" : "0"}
          mx={"auto"}
          maxW={"lg"}
          py={5}
          px={isNotSmallerScreen ? "15" : "0"}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          margin={isNotSmallerScreen ? "18" : "0"}
        >
          <Stack>
            <Image
              w="170px"
              m="auto"
              src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
              alt="Dan Abramov"
            />
            <br />
            <Text
              textAlign="center"
              fontSize="30px"
              fontWeight="bold"
              color={"black"}
            >
              Welcome to My Hours
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box w="100%">
                  <FormControl id="fullname" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <p
                      style={{
                        float: "left",
                        fontWeight: "2000",
                        fontSize: "12px",
                      }}
                    >
                      So we know what to call you in the app
                    </p>
                    <Input type="text" name="name" onChange={onChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <p
                  style={{
                    float: "left",
                    fontWeight: "2200",
                    fontSize: "12px",
                  }}
                >
                  You will use this email to login
                </p>

                <Input type="email" name="email" onChange={onChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={onChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={isNotSmallerScreen ? "2" : "1"}>
                <p>
                  <Link to="/terms" target="_blank">
                    {" "}
                    <Flex
                      fontSize={!isNotSmallerScreen && "14px"}
                      flexDirection={isNotSmallerScreen ? "row" : "column"}
                    >
                      By signing up you agree to the:
                      <Text color={"blue.400"}>Terms of Use</Text>
                    </Flex>
                  </Link>
                </p>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={onSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  {token ? (
                    <Link to="/login">
                      "Already a user" <Text color={"blue.400"}>Login</Text>{" "}
                    </Link>
                  ) : (
                    ""
                  )}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}
