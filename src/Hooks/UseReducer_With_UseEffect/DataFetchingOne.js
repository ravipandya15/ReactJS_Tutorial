import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Fetching Data with useReducer and useState

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch(error => {
            setLoading(false)
            setError('Something went wrong')
            setPost({})
        })
    })

    return (
        <div>
            Data Fetching - With useState and useEffect
            <div>
                {loading ? 'Loading' : post.title}
                {error ? error : null}
                {/* alternative
                {error && error} */}
            </div>
        </div>
    )
}

export default DataFetchingOne
