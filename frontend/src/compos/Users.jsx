import { Button, Heading, HStack, Toast, VStack } from "@chakra-ui/react";
import React from "react";

import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";


const dummy=[{name:"Rahul"},{name:"Sanjay"},{name:"Anurag"}]
function Users({ users }) {

  const {mutate:handleTransfer}=useMutation({
    mutationFn: async (user) => {
      const response = await axios.post(`/api/v1/user/transactions/transfer`,{
        amount: 100,
        recipientId: user._id
      });
      return response.data;
    },
    retry: 0,
    onSuccess: (data) => {
      Toast("Amount Transfered successsfully");
    },
    onError: (error) => {
      console.log("Error:", error);
    },
  })
  return (
    <>
      <VStack w='100%' p={4} >
      {dummy.map((user, index) => {
        return (
          <HStack key={index} w='30%' justifyContent='space-between' p={4} boxShadow='md' borderRadius='lg' shadow='md' 
          borderColor='gray.700' borderWidth='2px'>
            <Heading>{user.name}</Heading>
            <Button
            onClick={
              handleTransfer(user)
            }
            size='xs' 
            _hover={{ bg: "black", color:"white", borderColor:"blue" }}
            >Send</Button>
          </HStack>
        );
      })}
      </VStack>
    </>
  );
}

export default Users;
