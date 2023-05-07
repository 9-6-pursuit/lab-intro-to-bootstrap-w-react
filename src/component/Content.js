import React from 'react';

//receives props from the parent component
export default function Content({ posts, images, searchTerm, noMatches }) {
  let conditionContent;

  if (noMatches) {
    conditionContent = (
      <div className="col">
        <div className="alert alert-danger mt-3">
          No posts found with the search term "{searchTerm}". Please try again.
        </div>
      </div>
    );
  } else {
    conditionContent = (
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <img
                src={images[post.location.toLowerCase().replace(/\s/g, '-')]}
                className="card-img-top post-image-height"
                alt={post.location}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="breadcrumb-item text-secondary">{post.location}</p>
                <p className="card-text post-description fs-6 fw-light">{post.content}</p>
                <div className="text-end">
                  <a href="#" className="btn btn-warning fs-6">
                    Go to posts <i className="bi bi-caret-right-fill"></i>                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <>{conditionContent}</>; //return conditionContent rendered by the Content component
}
