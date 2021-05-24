import React from 'react'

const Hello = () => {
    //with JSX :

    return (
        <div id = 'hello' className = 'dummyClass'>
            <h1>Hello Ravi!</h1>
        </div>
    )

    // without JSX :
    // it is neccessary to import React because React will convert JSX to below syntax
    // return React.createElement('div', 
    //         {id: 'hello', className:'dummyClass'},
    //         React.createElement('h1', null, 'Hello Ravi!'))
}

export default Hello
