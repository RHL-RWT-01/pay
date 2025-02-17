// import { ChakraProvider } from "@chakra-ui/react"; // ✅ Correct Import
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>

  <QueryClientProvider client={queryClient}>
    <Provider>
      <App />
    </Provider>
  </QueryClientProvider>
  </BrowserRouter>
);
