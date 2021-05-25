import React from 'react'

// function Greet(){
//     return <h1>Hello Ravi Pandya!</h1>
// }

const Greet = (props) => {
    // props are immutable. you can not change value of it. below line throws error
    // props.name = "Ravi"

    //destructuring objects
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}!</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet