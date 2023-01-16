import React from 'react'
import style from '../styles/Navbar.module.css'
import logo from '../assets/logo192.png'
import { NavLink } from 'react-router-dom'
import searchIcon from '../assets/search.svg'
import bellIcon from '../assets/bell.svg'
// import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  // const navigate = useNavigate()

  return (
    <div className={style.navbarWrapper} >

        <div className={style.logoSection}>
            <img alt='logo' className={style.logo} src={logo}/>
            <h1 className={style.logotext} >Pic-CHAT</h1>
        </div>

        <div className={style.navbarSection}>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='#' >CHAT</NavLink>
            <NavLink to='/'>CONTACTS</NavLink>
            <NavLink to='/'>SETTINGS</NavLink>
            <NavLink to='/'>FAQS</NavLink>
            <NavLink to='#'>TERMS OF USE</NavLink>
        </div>

        <div className={style.controlSection}>
            <img alt='searchIcon' src={searchIcon}/>
            <img className={style.bellIcon} alt='bellIcon' src={bellIcon}/>
        </div>
    </div>
  )
}

export default Navbar