import { Button, Heading, HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Profile from "./Profile";
import axios from "axios";
import { debounce } from "lodash";
import Users from "./Users";
function Home() {
  const [searchUser, setSearchUser] = useState("");
  const [balance, setBalance] = useState(null);
  const handleSearch = debounce(async () => {
    try {
      const response = await axios.get(`/api/v1/user/findByStartsWith`);
      setSearchUser(response.data);
    } catch (e) {
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
        p={4}
        borderRadius="lg"
        boxShadow="lg"
      >
        PayEasy
      </Heading>
      {
        <Heading shadow="md" color="green.400">
          Your Balance:{balance}
        </Heading>
      }
      <HStack p={4}>
        <Input
          w="100%"
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Enter Name"
        ></Input>
        <IconButton>
          <FaSearch onClick={handleSearch} size="25px" />
        </IconButton>
      </HStack>
      <Users />
    </>
  );
}

export default Home;
