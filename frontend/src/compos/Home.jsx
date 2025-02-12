import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [searchUser, setSearchUser] = useState("");
  const handleSearch = () =>{
    console.log(searchUser)
  }
  return (
    <>
      <HStack>
        <Input
          w="800px"
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="search User"
        ></Input>
        <FaSearch onClick={handleSearch} size="25px" />
      </HStack>
    </>
  );
}

export default Home;
