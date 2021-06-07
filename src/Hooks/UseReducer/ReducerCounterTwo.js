import React, {useReducer} from 'react'

// useReducer Complex State and Action
const initialState = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state, action) => {
    switch(action.type){
        case "IncrementFirstCounter":
            return { ...state, firstCounter: state.firstCounter + action.value }
        case "DecrementFirstCounter":
            return { ...state, firstCounter : state.firstCounter - action.value }
        case "IncrementSecondCounter":
            return { ...state, secondCounter : state.secondCounter + action.value }
        case "DecrementSecondCounter":
            return { ...state, secondCounter : state.secondCounter - action.value }
        case "Reset":
            return initialState
        default:
            return state
    }
}

function ReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Count = {count.firstCounter}</div>
            <div>Second Count = {count.secondCounter}</div>
            <button onClick={() => dispatch({ type : "IncrementFirstCounter", value : 1})}>
                Increment FirstCounter
            </button>
            <button onClick={() => dispatch({type : "DecrementFirstCounter", value : 1})}>
                Decrement FirstCounter
            </button>
            <button onClick={() => dispatch({ type : "IncrementFirstCounter", value : 5})}>
                Increment FirstCounter by 5
            </button>
            <button onClick={() => dispatch({type : "DecrementFirstCounter", value : 5})}>
                Decrement FirstCounter by 5
            </button>
            <div>
                <button onClick={() => dispatch({ type : "IncrementSecondCounter", value : 1})}>
                    Increment SecondCounter
                </button>
                <button onClick={() => dispatch({type : "DecrementSecondCounter", value : 1})}>
                    Decrement SecondCounter
                </button>
            </div>
            <button onClick={() => dispatch({type : "Reset"})}>
                Reset
            </button>
        </div>
    )
}

export default ReducerCounterTwo
