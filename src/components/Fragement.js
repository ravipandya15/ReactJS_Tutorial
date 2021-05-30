import React from 'react'

function Fragement() {
    return (
        // alternative is <> and </>. but in that you can not pass key for list rendering.
        <React.Fragment>
            <h1>
                Fragement Demo
            </h1>
            <p>this is the demo of fragement</p>
        </React.Fragment>
    )
}

export default Fragement
