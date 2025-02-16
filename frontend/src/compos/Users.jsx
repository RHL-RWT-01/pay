import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";

import axios from "axios";


const dummy=[{name:"Rahul"},{name:"Sanjay"},{name:"Anurag"}]
function Users({ users }) {

  const handleTransfer = async () => {
    try{
      const response = await axios.post(`/api/v1/user/transactions/transfer`,{
        amount: 100,
        recipientId: user._id
      });
      console.log(response.data);
    }
  }
  return (
    <>
      <VStack w='100%' p={4} >
      {users.map((user, index) => {
        return (
          <HStack key={index} w='30%' justifyContent='space-between' p={4} boxShadow='md' borderRadius='lg' shadow='md' 
          borderColor='gray.900' borderWidth='1px'>
            <Heading>{user.name}</Heading>
            <Button
            onClick={
              handleTransfer()
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
