import { Button, Heading } from "@chakra-ui/react";
import React from "react";

function Users({ users }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <Heading>{user.name}</Heading>
            <Button>Transfer</Button>
          </div>
        );
      })}
    </>
  );
}

export default Users;
