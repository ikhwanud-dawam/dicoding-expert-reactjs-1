import { Link } from "react-router-dom";
import { Heading, Text, Link as ChakraLink, Flex, Box } from "@chakra-ui/react";
import LoginInput from "../components/LoginInput";

function Login() {
  return (
    <Flex
      as="section"
      w="full"
      align="center"
      h="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="full"
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading fontSize={"2xl"} mb={4} textAlign="center">
          Sign In
        </Heading>
        <LoginInput />
        <Text mt={4} textAlign="center">
          <ChakraLink as={Link} to={"/register"} color={"teal.500"}>
            Create new account?
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
}

export default Login;
