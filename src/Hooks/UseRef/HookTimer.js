import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)

    // useRef persist value if component render by any state or props change.
    // it also prevents any additonal render of the component.
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return ()=> {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook Timer : {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer
