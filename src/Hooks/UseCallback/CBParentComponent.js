import React, {useState, useCallback} from 'react'
import CBButton from './CBButton'
import CBCount from './CBCount'
import Title from './Title'

// useCallback cache the provider function itselt
// whereas usememo invokes provider function and cache it's result.

// If you want to cache a function use useCallBack
// If you want to cache result of an invoked function use useMemo

function CBParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary]= useState(50000)

    const incrementAge = useCallback (() => {
        setAge(age + 1)
    }, [age]) 

    const incrementSalary = useCallback (() => {
        setSalary(salary + 1000)
    }, [salary]) 

    return (
        <div>
            <Title />
            <CBCount text="Age" count ={age}/>
            <CBButton handleClick = {incrementAge}>Increment Age</CBButton>
            <CBCount text="Salary" count={salary} />
            <CBButton handleClick = {incrementSalary}>Increment Salary</CBButton>
        </div>
    )
}

export default CBParentComponent
