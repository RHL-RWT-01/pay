// import { ChakraProvider } from "@chakra-ui/react"; // ✅ Correct Import
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";
// const theme = extendTheme({}); // ✅ Creates a valid theme object

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
