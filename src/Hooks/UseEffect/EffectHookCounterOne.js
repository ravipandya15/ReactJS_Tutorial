import React, {useState, useEffect} from 'react'

function EffectHookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // this method will run every times component renders
    // replace componentDidMount(), componentDidUpdate(), componentWillUnmount() lifecycles of class component
    
    // pass 2nd argument as array of either props or state. defined values in array changes then only useEffect will be called.
    // it is conditional run effects using useEffect
    useEffect(() => {
        console.log('Updating Document Title')
        document.title = `Clicked ${count} times.`
    }, [count])
    
    return (
        <div>
            <input type="text" 
             value = {name}
             onChange = {e => setName(e.target.value)}/>

            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default EffectHookCounterOne
