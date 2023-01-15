import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
// const SOCKET_SERVER_URL = "http://192.168.69.122:3000/";
// const SOCKET_SERVER_URL = "http://localhost:3000/";
//https://pic-chat-server-production.up.railway.app/
const SOCKET_SERVER_URL = "https://pic-chat-server-production.up.railway.app/";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    
    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id, //True or false
      };
      setMessages((messages) => [...messages, incomingMessage]); 
    });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => { //Component will unmount
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    console.log("SocketRef: ",socketRef)
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage }; 
};

export default useChat;