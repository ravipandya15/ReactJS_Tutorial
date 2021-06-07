import React, {useContext} from 'react'
import { CounterContext } from '../../App'

function UseRCComponentF() {
    const countContext = useContext(CounterContext)
    return (
        <div>
            Component F : {countContext.countState}
            <button onClick={() => countContext.countDispatch("Increment")}>Increment</button>
            <button onClick={() => countContext.countDispatch("Decrement")}>Decrement</button>
            <button onClick={() => countContext.countDispatch("Reset")}>Reset</button>
        </div>
    )
}

export default UseRCComponentF
