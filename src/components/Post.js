import React from "react";

function Post({ post }) {
  return (
    <article className="blog-post">
      <div className="blog-post-img">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-post-content">
        <h2>{post.title}</h2>
        <p className="blog-post-meta">
          By {post.author} on {post.date}
        </p>
        <p>{post.excerpt}</p>
        <a href={post.url}>Read more &rarr;</a>
      </div>
    </article>
  );
}

export default Post;
