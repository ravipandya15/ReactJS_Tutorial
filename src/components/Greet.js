import React from 'react'

// function Greet(){
//     return <h1>Hello Ravi Pandya!</h1>
// }

const Greet = (props) => {
    // props are immutable. you can not change value of it. below line throws error
    // props.name = "Ravi"
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}!</h1>
            {props.children}
        </div>
    )
}

export default Greet