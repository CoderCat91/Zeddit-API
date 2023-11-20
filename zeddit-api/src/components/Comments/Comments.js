import React from 'react';
import './Comments.scss';
import { useSelector } from 'react-redux';
import { selectComments } from '../../features/redditSlice';


const Comments = (props) => {
    const comments = useSelector(selectComments);
    console.log(comments);
const author = props.author;
const body = props.body;

if(comments.length) {

    return (
        <div className="comments-wrapper">
            <div className="comments-top">
                <p>Comment by: u/{author}</p>
            </div>
            <div className="comments-body">
                <p >{body}</p>
                </div>
          
        </div>
    )
}
   };
;

export default Comments;