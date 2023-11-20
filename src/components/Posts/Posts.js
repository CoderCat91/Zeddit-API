import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';
import './Posts.scss';
import Cards from '../Cards/Cards';
import FeedError from '../FeedError/FeedError';
import { getPosts} from '../../features/redditSlice';


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const {isLoading, error, filter, selectedSubreddit} = posts;

    useEffect(() => {
        dispatch(getPosts({filter, selectedSubreddit}))
    }, [dispatch, filter, selectedSubreddit])

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
    <div className='feed-wrapper'>
         <h3>{filter} Posts in <span>{selectedSubreddit}</span></h3>
         <ul>
                    <div className='feed-container'>
                    
                    {posts.posts.map((feed, index) => (
                    <Cards key={feed.id} feed={feed}
                    />
                    )
                    )}
                        </div>
                        </ul>
                        </div>
            )
};
}
export default Posts;
