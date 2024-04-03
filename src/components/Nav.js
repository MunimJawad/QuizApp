import React from 'react';
import classes from  "../styles/Nav.module.css";
import logo from  "../assets/images/logo-bg.png"
import Account from './Account';
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
        <li>
          <Link to="/" class={classes.brand}>
            <img src={logo} alt="Learn with Munim Logo" />
            <h3>Learn with Munim</h3>
          </Link>
        </li>
      </ul>

      <Account/>
      </nav>
      
       
    );
};

export default Nav;