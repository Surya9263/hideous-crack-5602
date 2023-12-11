import {
  Box,
  Text,
  Flex,
  Link,
  Stack,
  Image,
  Input,
  Button,
  Checkbox,
  FormLabel,
  FormControl,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Store/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [creds, setCreds] = useState({});
  const token = useSelector((state) => state.auth.token);
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user login creds", creds);
    dispatch(login(creds));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("Mycred", JSON.stringify(creds));
    }
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundColor="white"
    >
      <Stack
        spacing={isNotSmallerScreen ? "5" : "0"}
        mx={isNotSmallerScreen ? "auto" : "0"}
        maxW={"lg"}
        py={isNotSmallerScreen ? "12" : "0"}
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
        </Stack>
        <Box>
          <Text
            textAlign="center"
            fontSize="30px"
            fontWeight="bold"
            color={"gray.600"}
          >
            Sign in
          </Text>
        </Box>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={onChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={onChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  fontSize={!isNotSmallerScreen && "14px"}
                  color={"blue.400"}
                >
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
