import { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import {  useAuthContext } from "./AuthContext";

 const SocketContext = createContext();

export const useSocketContext = ()=> {
  return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });

      setSocket(newSocket);

      // Listen for online users from the server
      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      
      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};


