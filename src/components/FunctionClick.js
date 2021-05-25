import React from 'react'

function FunctionClick() {
    function functionClickEventHandling(){
        console.log("Function button click")
    }
    return (
        <div>
            <button onClick={functionClickEventHandling}>Function Click</button>
        </div>
    )
}

export default FunctionClick
