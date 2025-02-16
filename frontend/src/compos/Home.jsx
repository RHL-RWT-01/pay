import { Button, Heading, HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Profile from "./Profile";
import axios from "axios";
import { debounce } from "lodash";
function Home() {
  const [searchUser, setSearchUser] = useState("");
  const handleSearch = debounce(async () => {
    try{
      const response = await axios.get(`/api/v1/user/findByStartsWith`);
      setSearchUser(response.data);

    }catch(e){
      console.log("Error in search route", e);
      throw new Error(e.message);
    }
  }, 1500);
  return (
    <>
      <Heading
        shadow="lg"
        shadowColor="red.400"
        color="blue.600"
        fontSize="16px"
      >
        PayEasy
      </Heading>
      <HStack p={4}>
        <Input
          w="100%"
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="search user by email"
        ></Input>
        <IconButton>
          <FaSearch onClick={handleSearch} size="25px" />
        </IconButton>

        {/* <Profile/> */}
      </HStack>
      {/* {!searchUser ? (
        <Heading fontSize="16px" > User Not Found</Heading>
      ) : (
        
      )} */}
      <Users users={searchUser} />
    </>
  );
}

export default Home;
