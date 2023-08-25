import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResultsList';
import search from '../../images/shutterstock_2279858155.png';
import './SearchBar.scss';
import { selectSearchTerm, setSearchTerm, setSelectedSubreddit } from '../../features/redditSlice';
import { fetchSearch } from '../../features/searchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const term = useSelector(selectSearchTerm);

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    useEffect(() =>{
        dispatch(fetchSearch(setSearchTerm))
    }, [dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setSelectedSubreddit(term))
        dispatch(setSearchTerm(''))
    }


    return (
        <div className="search-wrapper">
            <div className="search-bar">
            <div className="search-form">
            <form onSubmit={handleSubmit} >
                <input
                onChange={handleChange}
                placeholder='Search Subreddits'
                value={term}                    
                >
                </input>
                <div className='search-box'>
                    <SearchResults />
                </div>
            </form>
            <div className="search-image">
              <img src={search} alt=""/>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SearchBar;