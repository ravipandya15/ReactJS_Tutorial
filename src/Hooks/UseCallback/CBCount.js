import React from 'react'

function CBCount({text, count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(CBCount)
