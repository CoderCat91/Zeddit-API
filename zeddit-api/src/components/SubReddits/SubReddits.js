import React from 'react';
import { useDispatch } from 'react-redux';
import './SubReddits.scss'
import logo from '../../images/vecteezy_reddit-social-media-design-icon-symbol-logo-vector-illustration_8385783.png';
import { setSelectedSubreddit } from '../../features/redditSlice';


const SubReddits = ({subs}) => {
const thumbnail = subs.icon_img;
const name = subs.display_name; 

const dispatch = useDispatch();
if(name === 'r/Home') {
    return name
}

const handleClick = () => {
    if(name === 'r/Animals') {
        dispatch(setSelectedSubreddit('r/Animals'))
    } else {
    dispatch(setSelectedSubreddit(name))
    }
};




if(!thumbnail) {
    return (
        <div className='subreddit-boxes'>
         
                <div className="boxes-icons">
                    <button className="icon-button" onClick={handleClick}>
            <img src={logo} alt="subreddit icons"/>
            </button>
                    </div>
                <div className="boxes-text">
                {name}
                </div>
            </div>
)}

    return (
        <div className="subreddit-wrapper">
            <div className='subreddit-boxes'>
                <div className="boxes-icons">
                <button className="icon-button" onClick={handleClick}>
            <img src={thumbnail} alt="subreddit icons"/>
            </button>
                    </div>
                <div className="boxes-text">
                {name}
                </div>
            </div>
        </div>
    );
};

export default SubReddits;