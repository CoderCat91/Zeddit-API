import React, {useEffect} from 'react';
import Header from '../Header/Header';
import {useDispatch} from 'react-redux'
import { getPosts } from '../../features/redditSlice'
import Posts from '../Posts/Posts';
import SearchBar from '../SearchBar/SearchBar';
import './Home.scss'
import SubRedditsList from '../SubRedditsList/SubRedditsList';


const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="home">
        <Header/>
        <SearchBar/>
        <div className='primary'>
        <div className="main">
        <Posts />
        </div>
        <div className="subs">   
        <SubRedditsList/>
        </div>
        </div>
        </div>
    );
};

export default Home;