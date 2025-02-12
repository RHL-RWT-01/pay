import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
const dummy=[{name:"Rahul"},{name:"Sanjay"},{name:"Anurag"}]
function Users({ users }) {
  return (
    <>
      <VStack w='100%' p={4} >
      {dummy.map((user, index) => {
        return (
          <HStack key={index} w='100%' justifyContent='space-between' p={4} boxShadow='md' borderRadius='lg' shadow='md'  >
            <Heading>{user.name}</Heading>
            <Button size='xs' >Send</Button>
          </HStack>
        );
      })}
      </VStack>
    </>
  );
}

export default Users;
