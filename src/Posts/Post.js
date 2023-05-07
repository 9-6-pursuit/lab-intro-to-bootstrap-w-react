import images from "../images"

export default function Post({post}){
    const dasherized = post.loaction.split(" ").join("-").toLowerCase()

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img 
                src={images[dasherized]}
                className="card-img-top img-fluid object-fit-cover post-image-height"
                alt={post.loaction} 
                />
                <div className="card-body p4">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.location}</h6>
                    <p className="text-truncate">{post.content}</p>
                    <div className="text-end">
                        <a className="btn btn-warning">Go to post</a>
                    </div>
                </div>
            </div>
        </div>
    )
}