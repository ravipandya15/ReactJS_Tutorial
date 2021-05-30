import React from 'react'

function Column() {
    // const items = []
    return (
        // in fragement we can pass key as and attribute
        // <React.Fragment key={}></React.Fragment>
        // <React.Fragment>
        //     {
        //         items.map( item => (
        //             <React.Fragment key={item.id}>
        //                 <td>Name</td>
        //                 <td>{item.Title}</td>
        //             </React.Fragment>
        //         ))
        //     }
        // </React.Fragment>
        <>
            <td>Name</td>
            <td>Ravi Pandya!</td>
        </>
    )
}

export default Column
