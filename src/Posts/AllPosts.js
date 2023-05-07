import TableRows from "./TableRows";
import Post from "./Post";

export default function AllPosts({posts}){
    const postElements = posts.filtered.map((post) => {
        <Post key={post.id} post={post}/>
    })
    // const rows = TableRows(posts.AllPosts)

    return (
        <section className="container">
            <section className="row row-gap-4">
                <div className="col-lg-g">
                    <div className="row row-cols-1 row-cols-lg-2 g-lg-3 g-2">
                        {postElements}
                    </div>

                </div>

            </section>

        </section>
    )
}