import React from 'react'

function NameList() {
    const names = ["Ravi", "Parth", "Viswas"]
    return (
        <div>
            {/* // to avoid warning of unique key, use Index as Key 
            use index as last options. if you do not have some other unique value in a list, 
            list will never update, 
            list will never shorted or filterd*/}
            {/* <div>{names.map(name => <h2>{name}</h2>)}</div> */}
            <div>{names.map((name, index) => <h2 key = {index}>{name}</h2>)}</div>
        </div>
    )
}

export default NameList
