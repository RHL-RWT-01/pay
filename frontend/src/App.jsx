import { Button, VStack } from "@chakra-ui/react";
import Login from "./compos/Login";
import Signup from "./compos/Signup";
function App() {
  return (
    <>
      <VStack>
        {/* <Login /> */}
        <Signup />
      </VStack>
    </>
  );
}

export default App;
