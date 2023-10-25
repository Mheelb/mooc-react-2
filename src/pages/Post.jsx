import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {

    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(result => setPost(result.data));
    }, [id]);

    return (
        <div>
            <div>
                <b>id</b> : {post.id}<br />
            </div>
            <div>
                <b>userId</b> : {post.userId}<br />
            </div>
            <div>
                <b>title</b> : {post.title}<br />
            </div>
            <div>
                <b>body</b> : {post.body}<br />
            </div>
        </div>

    );
};

export default Post;