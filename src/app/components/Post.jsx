import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-green-500 rounded p-4 mt-2'>
            <h3>{post.userId}</h3>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;