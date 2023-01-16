import React, { useState } from 'react'
import style from '../styles/Homepage.module.css'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import menu from '../assets/menu.svg';
import logo from '../assets/logo192.png'
import users from '../assets/users.svg'
import camera from '../assets/camera.svg'
import search from '../assets/search.svg'

const Homepage = () => {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState('') 
  return (
    <div className={style.HomepageWrapper}>
         <Sidebar/>

         <header className={style.homeTopBar}>
            <div className={style.logoWrapper}>
              <img alt='logo' className={style.logo} src={logo} />
              <h5 className={style.logoText} >Pic-CHAT</h5>
            </div>
              <img className={style.camera} alt='camera' src={camera} />
              <img className={style.search} alt='search' src={search} />
              <img className={style.menu} alt='menu' src={menu} />
              <img className={style.users} alt='users' src={users} />
              <h6 className={style.chats}>Chats</h6>
              <h6 className={style.status}>Status</h6>
              <h6 className={style.calls}>Calls</h6>
         </header>

        <div className={style.HomepageContainer}> 
            <input className={style.textInput} onChange={(e)=> setUserInput(e.target.value)} type='text' placeholder='Enter room name'/>
            <button type='submit' className={style.submitButton} onClick={ ()=> {
                navigate(`/chats/${userInput}`) 
            } } > Create/Join Room </button>
        </div>
    </div>
  )
}

export default Homepage