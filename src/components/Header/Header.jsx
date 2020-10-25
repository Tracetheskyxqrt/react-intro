import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://sun9-67.userapi.com/c857328/v857328452/35e6d/h9s6FwF4_60.jpg' width='500' height='200'></img>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;

}

export default Header;