import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (event) => {
        console.log('Mouse event')
        setX(event.clientX)
        setY(event.clientY)
    }

    // componentDidUpdate mimic by passing 2nd argument as an empty array
    // telling react that we want to call useEffect only once. and not depending on any state or props.
    // so passing empty array
    useEffect( () => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // to mimic componentWillUnmount life cycle hook in functional component 
        // return a function from the function inside useEffect function.
        return () => {
            console.log('Unmouting Code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            X - {x}  Y - {y}
        </div>
    )
}

export default HookMouse
