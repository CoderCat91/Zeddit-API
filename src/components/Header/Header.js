import React from 'react';
import './Header.scss';
import logo from '../../images/vecteezy_reddit-social-media-design-icon-symbol-logo-vector-illustration_8385783.png';
import { useDispatch } from "react-redux";
import { setFilter, setSelectedSubreddit} from "../../features/redditSlice";




const Header = () => {
    const dispatch = useDispatch();


const handleClickFilterTop = () => {
    dispatch(setFilter('top'))
}

const handleClickFilterHot = () => {
    dispatch(setFilter('hot'))
}

const handleClickSubredditDogs = () => {
    dispatch(setSelectedSubreddit('dogs'))
}
const handleClickSubredditCats = () => {
    dispatch(setSelectedSubreddit('cats'))
}
const goToHome = () => {
dispatch(setSelectedSubreddit('Animals'))
}
    
    return (
        
        <div className="Header">
            <div className='logo-wrapper'>
        <button className='logo-button' onClick={goToHome}>
            <img src={logo} alt="logo"/>
            </button>
            </div>
            <ul>
        <li>
            <button className="header-button" id='new' onClick={handleClickFilterTop}>TOP
                </button>
                </li>
            <li>
                <button className="header-button" id='hot' onClick={handleClickFilterHot}>HOT
        </button>
        </li>
            <li>
            <h1 onClick={goToHome} className='zeddit-header'>ZEDDIT</h1>
            <h3>Zoo Reddit - r/animals</h3>
            </li>
            <li>   
                <button className="header-button" id='dogs' onClick={handleClickSubredditDogs}>
                    Dogs
        </button>
        </li>
            <li>        
                <button className="header-button" id='cats' onClick={handleClickSubredditCats} >
                    CATS</button></li>
            </ul>
    </div>
    );
};

export default Header;