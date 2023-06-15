import React from 'react'
import {images} from '../images/index';

function PostCard({postData, displayedLocations}) {
  

    
  return (
    <div className='card'>
    <div className='card-body'>
        <h1 className='card-title'>{postData.title}</h1>
        <p className='card-subtitle mb2 text-muted'>{postData.location}</p>
        <p className='card-text'>{postData.content}</p>
        <a href='' className='btn btn-warning'>Go to Post</a>
    </div>
    </div>
  )
}

export default PostCard