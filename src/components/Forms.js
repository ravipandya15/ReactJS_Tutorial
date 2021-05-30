import React, { Component } from 'react'

class Forms extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             comment : '',
             topic : 'react'
        }
    }

    handleUserName = event => {
        this.setState({
            userName : event.target.value
        })
    }

    handleComments = event => {
        this.setState({
            comment : event.target.value
        })
    }

    handleTopic = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    handleKeyPress = event => {
        if (event.which == 13){
            alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
            event.preventDefault()
        }
    }
    
    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={userName} onChange={this.handleUserName}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleComments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                {/* submit is always good  as it allows user to submit the form by presing enter - ** only for 1 input type="text"**/}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Forms
