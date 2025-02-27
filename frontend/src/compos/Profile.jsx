import { Avatar, AvatarFallback, Box, Button, Spinner } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { BsBox } from "react-icons/bs";

const Profile = () => {
  const { data: balance, isLoading } = useQueryClient({
    queryKey: ["balance"],
    queryFn: async () => {
      const response = await fetch("/api/v1/transactions/balance", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch balance");
      }
      return await response.json();
    },
  });
  return (
    <>
      <Button colorScheme="red" size="lg" variant="outline">
        {isLoading ? <Spinner size='md' /> : "Balance"}
      </Button>
      {balance && <h1>{balance}</h1>}
    </>
  );
};

export default Profile;
