import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const queryClient = useQueryClient();

  // // const handleLogin = () => {
  // //   console.log("Email:", email);
  // //   console.log("Password:", password);
  // //   queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
  // // };
  const queryClient = useQueryClient();

  const { mutate: handleLogin, isLoading } = useMutation({
    mutationFn: async (data) => {
      const response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      return resData;
    },
    onMutate: () => {
      queryClient.setQueryData("isAuthenticated", true);
    },
    onSuccess: (data) => {
      console.log("Data:", data);
      queryClient.setQueryData("isAuthenticated", true);
      navigate("/");
    },
    onError: (error) => {
      console.log("Error:", error);
      queryClient.setQueryData("isAuthenticated", false);
    },
  });

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
        onClick={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        type="password"
        size="md"
      />

      <Button
        colorScheme="blue"
        size="md"
        w="full"
        onClick={handleLogin()}
        _hover={{ bg: "black", color: "white", borderColor: "blue" }}
      >
        {isLoading ? "Loading..." : "Login"}
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
