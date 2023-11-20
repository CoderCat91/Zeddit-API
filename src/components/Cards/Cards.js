import React, {useState} from 'react';
import './Cards.scss';
import Comments from '../Comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import {fetchComments} from '../../features/redditSlice';


const Cards = ({feed}) => {
//const gallery = feed.galleryData;
const text = feed.selftext;
const image = feed.thumbnail;
const [showComments, setShowComments] = useState('hidden')


    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)
    const permalink = feed.permalink;
    let commentList = '';
   
    const toggleComments = () => {
        if(showComments === 'hidden') {
            dispatch(fetchComments(permalink))
            setShowComments('show')
        }
        if(showComments === 'show')
            setShowComments('hidden')
    }



    const mediaViewer = () => {
        if(image === 'self') {
            return (
                <div className='text'>
                    {text}
                </div>
            )
        } if(image) {
            return (
                <div>
                    <img src={image} alt="animal"/>
                </div>
                )
        };

    
        if (text) {
            return (
            <p>{text}</p>
            )
        }
    }

    if(posts.comments) {
        
        commentList = posts.comments.slice(0,15).map(comments => {
            const body = comments.body
            const author = comments.author
            const ups = comments.ups 
            return (
                <Comments
                    body={body}
                    author={author}
                    ups={ups}
                />
                
            )
          
        }
        );
    } 

    return (
        <div className = "card-wrapper">
        <div className='card-inner'>
            <div className='card-top'>
                <h2>{feed.title}</h2>
                <p>Posted on: u/{feed.author}</p>    
                </div>
            <div className='card-middle'>
            {mediaViewer()}
            {feed.text}
            </div>
            <div className='card-bottom'>
            <ul className='card-info'>
                   <h4>{feed.author}</h4>
                   <button className="comments-button" onClick={toggleComments}>
                        Comments</button>
                   <p>Score: {feed.score}</p>
                   </ul>
                   </div>
  
            <div className={showComments} >
                 <ul className='comment-list'>
                    <li>{commentList}</li>
                    </ul>
        </div>
        </div>
        </div>
        

                      );
};

export default Cards;