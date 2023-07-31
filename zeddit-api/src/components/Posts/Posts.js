import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';
import './Posts.scss';
import Cards from '../Cards/Cards';
import FeedError from '../FeedError/FeedError';
import { getPosts } from '../../features/redditSlice';


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
    <div className="feed-wrapper">
         <h3>{filter} posts in {selectedSubreddit}</h3>
         <ul>
                    <div className='feed-container'>
                    
                    {posts.posts.map(feed => {
                        const title = feed.title;
                        const subreddit = feed.subreddit_name_prefixed;
                        const author = feed.author;
                        const thumbnail = feed.thumbnail;
                        const score = feed.score;
                        const fullImage = feed.url
                        const gif = feed.url_overridden_by_dest
                        const mediaType = feed.post_hint
                        const domain = feed.domain
                        const galleryData = feed.gallery_data
                        const text = feed.selftext
                        const permalink = feed.permalink
                        const id = feed.id
                        const media = feed.media
                        return <Cards key={feed.id}
                        title={title}
                        subreddit={subreddit}
                        author={author}
                        thumbnail={thumbnail}
                        score={score}
                        fullImage={fullImage}
                        gif={gif}
                        mediaType={mediaType}
                        domain={domain}
                        galleryData={galleryData}
                        text={text}
                        permalink={permalink}
                        id={id}
                        media={media}/>
                    }
                    )}
                        </div>
                        </ul>
                        </div>
            )
};
}
export default Posts;