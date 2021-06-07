import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

// Fetching Data with useReducer and useEffect

const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_SUCCESS" :
            return {
                loading : false,
                error : '',
                post : action.payLoad
            }
        case "FETCH_ERROR" : 
            return {
                loading : false,
                error : 'Something went wrong',
                post : {}
            }
        default :
            return state

    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({ type : "FETCH_SUCCESS", payLoad : response.data } )
        })
        .catch(error => {
            dispatch({ type : "FETCH_ERROR" })
        })
    }, [])

    return (
        <div>
            Fetching Data with useReducer and useEffect
            <div>
                {state.loading ? 'Loading' : state.post.title}
                {state.error ?  state.error : null}
                {/* alternative
                {error && error} */}
            </div>
        </div>
    )
}

export default DataFetchingTwo
