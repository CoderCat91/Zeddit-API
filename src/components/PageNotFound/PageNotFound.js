import React from 'react';
import './PageNotFound.scss'
import { NavLink } from 'react-router-dom';
import landing from '../../images/vecteezy_404-landing-page_6549647.jpg';

const PageNotFound = () => {
    return (
        <div className = "error-page">
            <h1> Oops... 404 Page not found.</h1>
        <img src={landing} alt="alt" />
        <h3>It's okay, you can go back to the home page...</h3>
        <div className="error-button">   
            <NavLink to="/"><button className='er-button'>Home</button></NavLink></div>
        </div>
    );
};

export default PageNotFound;