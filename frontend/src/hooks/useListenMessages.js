import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"  
 
const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversation()
  useEffect(() => {
    if (!socket) return
 
    const handleNewMessage = (newMessage) => {
      setMessages([...messages, newMessage]) 
    }
 
    socket.on("newMessage", handleNewMessage)
 
    return () => socket.off("newMessage", handleNewMessage)
  }, [socket, messages, setMessages])
}
 
export default useListenMessages