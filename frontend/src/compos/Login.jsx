import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
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

      <Button>
        Don't have account?
        <Link to="/signup">Signup</Link>
      </Button>
    </VStack>
  );
}

export default Login;
