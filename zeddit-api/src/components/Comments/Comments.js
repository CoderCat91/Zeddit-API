import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectComments } from '../../features/redditSlice';

const Comments = ({feed}) => {
    const dispatch = useDispatch();
    const comment = useSelector(selectComments);

    useEffect(() => {
        dispatch(selectComments())
    }, [dispatch])
    return (
        <div className="comment">
        <div className="top">
            <p className="author">u/{feed.author}</p>
            <div className="score">
                <img src='/top-icon.png' alt=""></img>
                <p className="props">{feed.score}</p>
            </div>
        </div>
        <p className="body">{feed.body}</p>
    </div>
    );
};

export default Comments;