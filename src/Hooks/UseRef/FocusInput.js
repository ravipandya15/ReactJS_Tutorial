import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef()
    useEffect(() => {
        // focus the input element
        // current is react property
        // it will sets Refs current property with corresponding DOM Node
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref = {inputRef} type = "text" />
        </div>
    )
}

export default FocusInput
