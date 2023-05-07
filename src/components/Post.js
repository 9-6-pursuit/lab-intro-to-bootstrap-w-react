import React from 'react';
import images from '../images';

const Post = ({ post }) => {
  const { title, location, content } = post;

  // Helper function to truncate the content
  const truncateContent = (content, maxLength = 50) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + '...'
      : content;
  };

  return (
    <div className="col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <img
          src={images[location.toLowerCase().replace(/ /g, '-')]}
          className="card-img-top post-image"
          alt={title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
          <p className="card-text flex-grow-1">{truncateContent(content)}</p>
          <a
          href="#"
          className="btn btn-primary align-self-end custom-btn" // Add the custom-btn class here
          style={{ color: 'black' }}
        >
          Go to Post <i className="bi bi-arrow-right"></i>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
