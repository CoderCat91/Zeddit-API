import React from 'react';
import './Cards.scss';
import {Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Cards = (props) => {
const gallery = props.galleryData;

    const mediaViewer = () => {
        if(props.mediaType === 'hosted:video') {
            return (
                <video className="reddit-video" controls>
                    <source src={props.media.reddit_video.fallback_url} type="video/mp4" ></source>
                </video>
            )
        } if (props.text) {
            return (
            <p>{props.text}</p>
            )
        }
        if(props.galleryData) {
            return (
                <div className="box">
      <Carousel useKeyboardArrows={true}>
        {gallery.items.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
            )
        }
        if(props.mediaType === 'link') {
            return (
                <div className="link">
                    <p>See full article here</p>
                    <p>&darr;</p>
                    <a href={props.fullImage} target="_blank" rel="noreferrer"><img src={props.thumbnail} alt=""></img></a>
                </div>
            )
        }
    }

    return (
        <div className = "card-wrapper">
        <div className='card-inner'>
            <div className='card-top'>
                <h2>{props.title}</h2>
                <p>Posted on: u/{props.author}</p>    
                </div>
            <div className='card-middle'>
            <img src={props.thumbnail} alt=""/>
            {mediaViewer()}
            </div>
            <div className='card-bottom'>
                   <h4>{props.author}</h4>
                   <button className='comments-button'>
                    <img className="comment-icon" src="../../images/comments-icon.png" alt=""/>
                    Comments</button>
                   <p>{props.score}</p></div>
        </div>
        </div>
    );
};

export default Cards;