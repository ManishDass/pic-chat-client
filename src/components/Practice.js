import React from 'react'
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";


const Practice = () => {

    let testRef = useRef()
    const SERVER = "http://192.168.69.122:3000/"
    testRef = socketIOClient(SERVER);
    console.log(testRef)

  return (
    <div>Practice</div>
  )
}

export default Practice