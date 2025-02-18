import { Box, VStack, Input, Button } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const {mutate:handleSignup} = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const resData = await response.json();
      return resData;
    },
    retry: 0,
    onSuccess: (data) => {
      console.log("Data:", data);
    },
    onError: (error) => {
      console.log("Error:", error);
    },
  })
  return (
    <VStack spacing={4} w="300px" p={4} boxShadow="md" borderRadius="lg">
      <Box bg="teal.900" p={4} rounded="lg">
        Signup
      </Box>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        size="md"
      />
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
        w="full"
        _hover={{ bg: "black", color: "white", borderColor: "blue" }}
        colorScheme="blue"
        size="md"
        onClick={handleSignup}
      >
        Signup
      </Button>
      <Button>
        Don't have account? <a href="/login">Login</a>
      </Button>
    </VStack>
  );
}

export default Signup;
