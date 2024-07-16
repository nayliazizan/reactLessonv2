import React from "react";
import Post from "./Post";

function Blog(props) {
    const postsList = props.posts.map((post) => {
        return (
            <Post post={post} key={post.id}/>
        );
    })
    return (
        <div className="blogList">
            <h1>Nayli Umairah's Blog</h1>
            {postsList}
        </div>
    );
}

export default Blog;