import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef()
    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref = {inputRef} type = "text" />
        </div>
    )
}

export default FocusInput
