import React from "react";

function Post(props) {
    const {userId, id, title, body} = props.post;
    return (
        <div className="ui card">
            <div className="content">
                <h1>🐦{id} - {title}</h1>
                <h3>{body}</h3>
            </div>
        </div>
    );
}

export default Post;