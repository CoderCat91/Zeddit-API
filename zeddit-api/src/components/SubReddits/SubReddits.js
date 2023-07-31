import React from 'react';
import './SubReddits.scss'
//import { useDispatch } from 'react-redux';

const SubReddits = (props) => {
    return (
        <div className="subreddit-wrapper">
            <div className='subreddit-boxes'>
                <div className="boxes-icons">
            <img src={props.thumbnail} alt="subreddit icons"/>
                    </div>
                <div className="boxes-text">
                {props.name}
                </div>
            </div>
        </div>
    );
};

export default SubReddits;