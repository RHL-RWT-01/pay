import { Box, VStack, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  async function handleSignup() {
    const res = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        
    });
    if (!res.ok) {
      throw new Error("Failed to signup");
    }
    const data = await res.json();
    console.log(data);
  }
  return (
    <VStack>
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
    </VStack>
  );
}

export default Signup;
