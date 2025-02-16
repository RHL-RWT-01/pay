import { Button, Center, HStack, Spinner, VStack } from "@chakra-ui/react";
import Login from "./compos/Login";
import Signup from "./compos/Signup";
import Home from "./compos/Home";
import { useQuery } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./compos/Users";
import Profile from "./compos/Profile";
import axios from "axios";
function App() {
  //TODO => add api url to validate me in BE and here also
  // const isAuth=true;
  const {
    data: isAuthenticated,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: async () => {
      try {
        const res = await axios.get(`/api/v1/user/me`);
        return res.data();
      } catch (e) {
        throw new Error("Failed to authenticate");
      }
    },
    onError: (error) => {
      console.log(error);
      throw new Error("Failed to authenticate");
    },

  });

  
  return (
    <>
     <Home/>
     <Users/>
    </>
  );
}

export default App;
