import { useState } from 'react'
import postData from "./data/posts.json"


export default function LocationCards () {
    const [postData, setpostData] = useState(postData)

    return (
        <div className="App">

      {
        postData.map((post) => {
          return (
            <li className = 'card' key = {post.id}>
              <span>{post.title}</span>             
              <button>Go to Post</button>
            </li>
          )
        })
      }

        </div>
    )
}