import React from "react";

function Post({ post }) {
  return (
    <div className="post" key={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.location}</h3>
      <p>{post.content.substring(0, 100)}...</p>
      <button>Go to Post</button>
    </div>
  );
}

export default Post;
