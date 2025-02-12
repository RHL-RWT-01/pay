import { Button, VStack } from "@chakra-ui/react";
import Login from "./compos/Login";
import Signup from "./compos/Signup";
import Home from "./compos/Home";
function App() {
  return (
    <>
      <VStack>
        {/* <Login /> */}
        {/* <Signup /> */}
        <Home />
      </VStack>
    </>
  );
}

export default App;
