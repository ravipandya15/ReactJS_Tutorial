import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    )
}

export default DataFetching
