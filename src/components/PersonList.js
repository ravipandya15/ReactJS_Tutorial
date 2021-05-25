import React, { Component } from 'react'
import Person from './Person'

class PersonList extends Component {
    // names = ["Ravi", "Parth", "Viswas"]
    Person = [
        {
            id: 1,
            name: "Ravi",
            age: 23,
            skill: "React"
        },
        {
            id: 2,
            name: "Parth",
            age: 22,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Viswas",
            age: 29,
            skill: "Vue"
        }
    ]

    //key is a special props need to pass for uniquely identify each element of iterable
    PersonLst = this.Person.map(person => <Person key = {person.id} person = {person} />)

    render() {
        return (
            <div>{this.PersonLst}</div>
        )
    }
}

export default PersonList
