import React, {useEffect} from 'react';
import Header from '../Header/Header';
import {useDispatch} from 'react-redux'
import { getPosts } from '../../features/redditSlice'
import Posts from '../Posts/Posts';
import SearchBar from '../SearchBar/SearchBar';
import SubReddits from '../SubReddits/SubReddits'


const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="home">
        <Header/>
        <SearchBar/>
        <Posts />
        <div className="subs">   
        <SubReddits/>
        </div>

        </div>
    );
};

export default Home;