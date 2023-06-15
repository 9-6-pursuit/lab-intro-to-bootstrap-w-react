function Posts({postData, images}) {
    console.log(images)
    return(
    <aside class="col">
        <div class="row">
        {postData.map(post => (
            <div key={post.id} className="col-sm-4 col-md-4 col-lg-4 posts"> 
              <img className="img-fluid"src={images[post.location.toLowerCase()]} alt={post.location}></img><br/>
              <h3 >{post.title}</h3>
              <h3>{post.location}</h3>
              <h3>{post.content}</h3>
              <button>
              Go to post
              </button>
              <br/>
            </div>
          ))}
        </div>
    </aside>
    );
  }

  export default Posts;