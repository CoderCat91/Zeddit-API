import './SubRedditsList.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { getSubReddits } from '../../features/subredditSlice';
import SubReddits from '../SubReddits/SubReddits'

const SubRedditsList = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector((state) => state.subreddits);
    console.log(subreddits);

    useEffect(() => {
        dispatch(getSubReddits())
    }, [dispatch])
    return (
        <div className="subredditlist-container">
            <h3>Subreddits</h3>
            {subreddits.subreddits.slice(0,25).map(subs => {
                  const name = subs.display_name;
                  const thumbnail = subs.icon_img;
                const subscribers = subs.subscribers
                const url = subs.url
                return <SubReddits key={subs.id}
                name={name}
                thumbnail={thumbnail}
                url={url}
                subscribers={subscribers}/>
            })}
        </div>
    );
};

export default SubRedditsList;