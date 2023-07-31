import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import logo from '../../images/vecteezy_reddit-social-media-design-icon-symbol-logo-vector-illustration_8385783.png';
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/redditSlice";




const Header = () => {
    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch(setFilter('new'))
        document.getElementById('new').classList.add('active')
        document.getElementById('hot').classList.remove('active')
        document.getElementById('dogs').classList.remove('active')
        document.getElementById('cats').classList.remove('active')
    }

    const handleClickHot = () => {
        dispatch(setFilter('hot'))
        document.getElementById('hot').classList.add('active')
        document.getElementById('new').classList.remove('active')
        document.getElementById('dogs').classList.remove('active')
        document.getElementById('cats').classList.remove('active')
    }

    

    return (
        
        <div className="Header">
                   <NavLink to="/">
        <div className='logo'>
        <img src={logo} alt="alt" />
        </div>
        </NavLink>
            <ul>
        <li>
            <button id='new' onClick={handleClickNew}>NEW
                </button>
                </li>
            <li>
                <button  id='hot' onClick={handleClickHot}>HOT
        </button>
        </li>
            <li>
                <h1>ZEDDIT</h1>
            <h3>Zoo Reddit - r/animals</h3>
            </li>
            <li>   
                <button  id='dogs' >
                    Dogs
        </button>
        </li>
            <li>        
                <button id='cats' >
                    CATS</button></li>
            </ul>
    </div>
    );
};

export default Header;