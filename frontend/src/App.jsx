import Login from "./compos/Login";
import Signup from "./compos/Signup";
import Home from "./compos/Home";
import { useQuery } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./compos/Users";
import Profile from "./compos/Profile";
import axios from "axios";
function App() {
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
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={isAuthenticated && <Users />} />
        <Route path="/profile" element={isAuthenticated && <Profile />} />
      </Routes>
    </>
  );
}

export default App;
