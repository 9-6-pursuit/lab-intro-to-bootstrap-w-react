import "../data/posts.json" 

function Card({post}) {
    const something=post.location.split(" ").join("-").toLowerCase();

  return (
    <div>
        <p>Card Compoonent</p>

        
    </div>
  )
}

export default Card