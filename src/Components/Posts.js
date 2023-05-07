import React from 'react'
import images from "../images/index.js"

function Posts({postData}) {

   

  return (
    <>
    <div>Posts</div>
      <div className="container p-5 my-5 border">
        <div className="card-columns card-deck"> 
            <div className="card border">
                <img className="card-img-top" src={images[postData[0].location.toLowerCase()]} alt="Card location" />

                <div className="card-body">
                    <h4 className="card-title">{postData[0].title}</h4>
                    <p className="card-text text-truncate">
                      {postData[0].location} <br />
                      {postData[0].content} <br />
                    </p>

                </div>
                <div className="card-footer">
                <button  className="btn btn-warning position-end" type="submit">Go to post  ▶ </button> <br />
                  </div>
            </div>


        </div>
      </div>
    </>
  )
}

export default Posts