import React from 'react';
import './Cards.scss';
//import Comments from '../Comments/Comments'


const Cards = ({feed}) => {
const gallery = feed.galleryData;
const text = feed.selftext;
const image = feed.thumbnail;
let pics = feed.media_metadata
console.log(pics)




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

        

        if(feed.mediaType === 'hosted:video') {
            return (
                <video className="reddit-video" controls>
                    <source src={feed.media.reddit_video.fallback_url} type="video/mp4" ></source>
                </video>
            )
        } 
        if (text) {
            return (
            <p>{text}</p>
            )
        }
        if(feed.galleryData) {
            return (
                <div className="box">
        {gallery.items.map((photos) => (
          <div className="slide" key={photos.id}>
            <img alt="sample_file" src={feed.media_metadata} />
          </div>
        ))}
    </div>
            )
        }
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
                   <button className='comments-button'>
                    Comments</button>
                   <p>Score: {feed.score}</p>
                   </ul></div>
        </div>
        </div>
    );
};

export default Cards;