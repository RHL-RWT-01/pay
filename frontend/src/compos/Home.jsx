import { Button, Heading, HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [searchUser, setSearchUser] = useState("");
  const handleSearch = () => {
    console.log(searchUser);
    fetch(``, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: searchUser }),
    }).then((response) => response.json());
  };
  return (
    <>
      <HStack p={4}>
        <Input
          w="800px"
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="search user by email"
        ></Input>
        <IconButton>
          <FaSearch onClick={handleSearch} size="25px" />
        </IconButton>
      </HStack>
      {/* {!searchUser ? (
        <Heading fontSize="16px" > User Not Found</Heading>
      ) : (
        <Users users={searchUser} />
      )} */}
    </>
  );
}

export default Home;
