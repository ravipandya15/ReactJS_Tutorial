import React, {useState, useEffect} from 'react'

function EffectHookCounterOne() {
    const [count, setCount] = useState(0)

    // this method will run every times component renders
    // replace componentDidMount(), componentDidUpdate(), componentWillUnmount() lifecycles of class component
    useEffect(() => {
        document.title = `Clicked ${count} times.`
    })
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default EffectHookCounterOne
