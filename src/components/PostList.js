import React from 'react';
import Post from './Post';

const PostList = ({ posts, searchTerm }) => {
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredPosts.length === 0 ? (
          <div className="alert alert-danger" role="alert">
            No results found for "{searchTerm}"
          </div>
        ) : (
          filteredPosts.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default PostList;

  