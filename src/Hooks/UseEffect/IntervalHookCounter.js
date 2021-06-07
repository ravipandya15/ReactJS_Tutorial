import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    // 1st approach - add count as dependency array
    // useEffect(() => {
    //     const internal = setInterval(tick, 1000)

    //     return () => {
    //         clearInterval(internal)
    //     }
    // }, [count])


    useEffect(() => {
        const internal = setInterval(tick, 1000)

        return () => {
            clearInterval(internal)
        }
    })

    // const tick = () => {
    //     setCount(count + 1)
    // }

    // 2nd approach - use prevCount
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
