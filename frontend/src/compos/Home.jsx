import { Button, Heading, HStack, Input } from "@chakra-ui/react";
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
      <HStack>
        <Input
          w="800px"
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="search user by email"
        ></Input>
        <FaSearch onClick={handleSearch} size="25px" />
      </HStack>
      {!searchUser ? (
        <Heading fontSize="16px" > User Not Found</Heading>
      ) : (
        <Users users={searchUser} />
      )}
    </>
  );
}

export default Home;
