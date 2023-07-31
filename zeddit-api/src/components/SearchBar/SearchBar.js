import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="search-wrapper">
            <div className="search-bar">
            <form className ="search-form">
                <img src='../../images/search-icon.png' alt=''/>
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