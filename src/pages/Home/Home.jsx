import React, { useEffect, useState } from 'react'
import './Home.css'
import useGetBlog from '../../hooks/useGetBlog'
import useGetUserById from '../../hooks/useGetUserById';
import FeedPost from './Feed/FeedPost';

const Home = () => {

    const [posts, setPosts] = useState();
    const { getUserProfile } = useGetUserById();

    const { isLoading, getPosts } = useGetBlog();

    const fetchPosts = async () => {
        const res = await getPosts();
        setPosts(res);

    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (

        <div className='div45'>
            <div className='fixed-div'> <form action="http://localhost:5173/createpost"><button className="btn12"></button></form>
            </div>




            <h1 className='heading' >Trending box</h1>
            {posts && posts.map((post, index) => {

                return <div key={index} className="">
                    <FeedPost post={post} uid={post.createdBy} />
                </div>
            })}
            <footer>Copyright © 2024 Root Bloging Website</footer>







        </div>
    )
}

export default Home
