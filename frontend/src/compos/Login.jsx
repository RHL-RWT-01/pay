import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <VStack spacing={4} w="300px" p={4} boxShadow="md" borderRadius="lg">
      <Heading>Login</Heading>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        size="md"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        type="password"
        size="md"
      />

      <Button
        colorScheme="blue"
        size="md"
        w="full"
        onClick={handleLogin}
        _hover={{ bg: "black", color: "white", borderColor: "blue" }}
      >
        Login
      </Button>

      <p>Don't Have Account
        <a href="/signup"> Signup</a>
      </p>
    </VStack>
  );
}

export default Login;
