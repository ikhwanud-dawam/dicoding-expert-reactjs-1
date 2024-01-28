import { Link } from "react-router-dom";
import { Heading, Text, Link as ChakraLink, Flex, Box } from "@chakra-ui/react";
import RegisterInput from "../components/RegisterInput";

function Register() {
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
          Create an account
        </Heading>
        <RegisterInput />
        <Text mt={4} textAlign="center">
          Already have an account?{" "}
          <ChakraLink as={Link} to={"/login"} color={"teal.500"}>
            Sign In
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
}

export default Register;
