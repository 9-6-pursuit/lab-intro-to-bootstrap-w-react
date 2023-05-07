import React from "react";
import images from "../images";

function Post({ post }) {
  const locationIMG = images[post.location.toLowerCase().replace(" ", "-")];

  return (
    <div className="coi" key={post.id}>
      <div className="card shadow-sm">
        <img
          className="card-img-top img-fluid object-fit-cover post-image-height"
          src={locationIMG}
          alt={post.location}
        />
        <div className="card-body p-4">
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{post.location}</h6>
          <p className="text-truncate">{post.content.substring(0, 100)}...</p>
          <div className="text-end">
            <a className="btn btn-warning">Go to Post</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;