import { Button, Center, Spinner, VStack } from "@chakra-ui/react";
import Login from "./compos/Login";
import Signup from "./compos/Signup";
import Home from "./compos/Home";
import { useQuery } from "@tanstack/react-query";
import Users from "./compos/Users";
function App() {
  //TODO => add api url to validate me in BE and here also
  const {
    data: isAuthenticated,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: async () => {
      try {
        const res = await fetch("url");
        if (!res.ok) throw new Error("Failed to authenticate");
        return res.json();
      } catch (e) {
        throw new Error("Failed to authenticate");
      }
    },
  });

  // if (isLoading)
  //   return (
  //     <Center h="100vh">
  //       <Spinner size="xl"></Spinner>
  //     </Center>
  //   );
  return (
    <>
      <VStack>
        {/* <Login /> */}
        {/* <Signup /> */}
        <Home />
        <Users />
      </VStack>
    </>
  );
}

export default App;
