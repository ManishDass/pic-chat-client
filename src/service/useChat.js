import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
// const SOCKET_SERVER_URL = "http://192.168.40.122:3000/"; //for LAN
// const SOCKET_SERVER_URL = "http://localhost:3000/"; //For same device
//const SOCKET_SERVER_URL = "https://pic-chat-server-production.up.railway.app/"; //for server 
const SOCKET_SERVER_URL = "http://localhost:3000/"; //for server

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
      // console.log("ID: ",message.senderId)
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id, //True or false
        senderId: message.senderId
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
    // console.log("SocketRef: ",socketRef)
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  const sendFile = (fileBuffer) => {
    // console.log("Buffer: ",fileBuffer)
    socketRef.current.emit('newFileupload', {file: fileBuffer, type: fileBuffer.name}, (status) => {
      console.log(status)
    });
  };


  return { messages, sendMessage, sendFile }; 
};

export default useChat;
