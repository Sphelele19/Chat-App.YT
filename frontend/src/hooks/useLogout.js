import { useState } from "react";
import toast from "react-hot-toast";
import  {useAuthContext}  from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include", // If using cookies
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null); 
      // Optionally, you can also clear the auth context here if needed
    } catch (error) {
      toast.error(`An error occurred during logout: ${error.message || error}`);
      console.error(`An error occurred during logout: ${error.message || error}`);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
}
export default useLogout;