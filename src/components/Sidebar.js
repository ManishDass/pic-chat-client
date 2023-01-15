import React from 'react'
import style from '../styles/Sidebar.module.css'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.jpeg'
import avatar3 from '../assets/avatar3.jpeg'
import avatar4 from '../assets/avatar4.jpeg'
import avatar5 from '../assets/avatar5.jpeg'

const Sidebar = () => {
  return (
    <div className={style.sidebar} >
        <div className={style.userWrapper}>
            <img alt='avatar' className={style.avatar} src={avatar1}/>
            <h5 className={style.userName}>Robert Pattinson</h5>
            <p className={style.userMsg}>Hi there, How are you?</p>
            <p className={style.msgTime}>08:50</p>
        </div>
        <hr className={style.line} />
        <div className={style.userWrapper}>
            <img alt='avatar' className={style.avatar} src={avatar2}/>
            <h5 className={style.userName}>Elena Gilbert</h5>
            <p className={style.userMsg}>Good Morning 🌞</p>
            <p className={style.msgTime}>07:21</p>
        </div>
        <hr className={style.line} />
        <div className={style.userWrapper}>
            <img alt='avatar' className={style.avatar} src={avatar3}/>
            <h5 className={style.userName}>Demon Salvatore</h5>
            <p className={style.userMsg}>Join the meeting asap!</p>
            <p className={style.msgTime}>11:20</p>
        </div>
        <hr className={style.line} />
        <div className={style.userWrapper}>
            <img alt='avatar' className={style.avatar} src={avatar4}/>
            <h5 className={style.userName}>Ramsay Boltone</h5>
            <p className={style.userMsg}>Whats up? 😁</p>
            <p className={style.msgTime}>17:20</p>
        </div>
        <hr className={style.line} />
        <div className={style.userWrapper}>
            <img alt='avatar' className={style.avatar} src={avatar5}/>
            <h5 className={style.userName}>Sansa Stark</h5>
            <p className={style.userMsg}>Coming for dinner tonight? 🍽️</p>
            <p className={style.msgTime}>21:20</p>
        </div>
    </div>
  )
}

export default Sidebar