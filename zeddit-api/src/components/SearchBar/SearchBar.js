import React from 'react';
import search from '../../images/shutterstock_2279858155.png';
import SearchResults from '../SearchResults/SearchResults';
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="search-wrapper">
            <div className="search-bar">
            <form className ="search-form">
                <img src={search} alt=''/>
                <input
                className='input'
                placeholder='Search Subreddits'
                value=""                    
                >
                </input>
                <div className='search-box'>
                    <SearchResults />
                </div>
            </form>
            </div>
        </div>
    );
};

export default SearchBar;