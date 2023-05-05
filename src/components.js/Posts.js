import React, { useState, useEffect } from "react";

function Posts({ posts }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?count=${posts.length}&query=city&client_id=mVRQ5z8f4Ay-4LxEIFdmVGWoVWEqth6nrPXMeoqPsXM`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [posts.length]);

  const PostCard = ({ title, location, content, photoUrl }) => {
    return (
      <div className="card mb-3">
        <img src={photoUrl} className="card-img-top card-img-fixed" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
          <p className="card-text">{content.substring(0, 90)}...</p>
          <button className="btn btn-warning">Go to post ▶️</button>
        </div>
      </div>
    );
  };

  const postCards = posts.map((post, index) => (
    <div className="col-lg-6 mb-4" key={post.id}>
      <PostCard
        title={post.title}
        location={post.location}
        content={post.content}
        // accesses the photo object at the current index.
        photoUrl={photos[index]?.urls?.regular || ""}
      />
    </div>
  ));

  return <div className="row">{postCards}</div>;
}

export default Posts;
