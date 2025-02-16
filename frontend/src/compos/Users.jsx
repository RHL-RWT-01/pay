import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
const dummy=[{name:"Rahul"},{name:"Sanjay"},{name:"Anurag"}]
function Users({ users }) {
  return (
    <>
      <VStack w='100%' p={4} >
      {users.map((user, index) => {
        return (
          <HStack key={index} w='30%' justifyContent='space-between' p={4} boxShadow='md' borderRadius='lg' shadow='md' 
          borderColor='gray.900' borderWidth='1px'>
            <Heading>{user.name}</Heading>
            <Button size='xs' 
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
