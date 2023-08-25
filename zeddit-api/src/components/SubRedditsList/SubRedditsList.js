import './SubRedditsList.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { getSubReddits } from '../../features/subredditSlice';
import SubReddits from '../SubReddits/SubReddits';
import Loading from '../Loading/Loading';
import FeedError from '../FeedError/FeedError';

const SubRedditsList = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector((state) => state.subreddits);
    console.log(subreddits);
    const {isLoading, error} = subreddits;
    useEffect(() => {
        dispatch(getSubReddits())
    }, [dispatch])

    if(isLoading) {
        return (
            <div className='feed'>
                <ul>
                    <h3 className='loading'>Loading...</h3>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                </ul>
            </div>
        )
    }
    if(error) {
return (
    <FeedError/>
)
} else {
    return (
        <div className="subredditlist-container">
            <h3>Subreddits</h3>
            {subreddits.subreddits.slice(0,25).map((subs, index) => (
                <SubReddits key={subs.id} subs={subs}/>
            ))}
        </div>
    );
}
};

export default SubRedditsList;