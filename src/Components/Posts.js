import React from 'react'
import "../images/chicago.jpg" 

function Posts(props) {
  return (
    <>
    <div>Posts</div>
      <div className="container p-5 my-5 border">
        <div className="card-columns card-deck"> 
            <div className="card border">
                <img className="card-img-top" src="chicago.jpg" alt="Card location" />
                <div className="card-body">
                    <h4 className="card-title">props.postData.title {props.postData.title}</h4>
                    <p className="card-text">
                      props.postData.location {props.postData.location} <br />
                      props.postData.content {props.postData.content} <br />
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