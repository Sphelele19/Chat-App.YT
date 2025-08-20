import { useState } from "react";
import toast from "react-hot-toast";
import  {useAuthContext}  from "../context/AuthContext"; // make sure you import your auth context

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {

    const success = handleInputErrors({ username, password });
    if (!success) return; 
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        return false; // failed login
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Logged in successfully!");
      return true; // successful login

    } catch (error) {
      toast.error(error.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  } else if (username.length < 6) {
    toast.error("Username must be at least 6 characters long");
    return false;
  }
  return true;
}
