import PostsCard from "./PostCard";

function Posts({ postData }) {
    return (
        <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-lg-2 g-lg-3 g-2">
                {postData.map(post =>
                    <PostsCard
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
        </div>
    );
}

export default Posts;
