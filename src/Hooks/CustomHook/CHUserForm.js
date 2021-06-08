import React, {useState} from 'react'
import useInput from './useInput'

function CHUserForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        alert(`Hello ${firstName} ${lastName}`)
        e.preventDefault()
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>FirstName : </label>
                    <input type="text" 
                        {...bindFirstName}/>
                </div>
                <div>
                    <label>LastName : </label>
                    <input type="text" 
                        {...bindLastName}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CHUserForm
