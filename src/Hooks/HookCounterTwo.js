import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    // Array Destructuring
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++){
            setCount( prevCount =>  prevCount + 1 )
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={() => {setCount(initialCount)}}>Reset</button>
             {/* unsafe code always use prevCount for safer side*/}
            {/* <button onClick={() => {setCount(count + 1)}}>Increment</button>
            <button onClick={() => {setCount(count - 1)}}>Decrement</button> */}
            <button onClick={() => {setCount(prevCount =>  prevCount + 1)}}>Increment</button>
            <button onClick={() => {setCount(prevCount =>  prevCount -   1)}}>Decrement</button> 
            <button onClick={incrementFive}>Increment Five</button>
            {/* below code will work. but use prevCount */}
            {/* <button onClick={() => {setCount(count + 10)}}>Increment Ten</button> */}
        </div>
    )
}

export default HookCounterTwo
