import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
    // 1st approach
        this.inputRef = React.createRef()

        // 2nd approach - older
        // this.cbRef = null;
        // this.setCbRef = (element) => {
        //     this.cbRef = element
        // }
    }

    componentDidMount(){
        // this.cbRef.focus()
        // console.log(this.inputRef)
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                {/* <input type="text" ref={this.setCbRef}/> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
