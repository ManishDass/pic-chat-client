import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
        <> 
          <Navbar/>
          <Homepage/>
        </> 
        }/>
        
        <Route path='/chats/:id' element={
          <>
            <Navbar /> 
            <Chat/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;