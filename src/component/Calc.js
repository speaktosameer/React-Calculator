import React, {Component} from 'react';
import '../App.css'

class Calc extends Component{
    constructor(){
        super()
        this.state=({
            num1:'',
            num2:'',
            total:''
        })
    }
    handlenum1=(event)=>{
        this.setState({
            num1:event.target.value
        })
    }
    handlenum2 =(event) => {
        this.setState({
            num2:event.target.value
        })
    }
    addition = ()=>{
        this.setState({
            total:parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }
    subtraction=()=>{
        this.setState({
            total:parseInt(this.state.num1)-parseInt(this.state.num2)
        })
    }
    multiplication=()=>{
        this.setState({
            total:parseInt(this.state.num1)*parseInt(this.state.num2)
        })
    }
    division=()=>{
        this.setState({
            total:parseInt(this.state.num1)/parseInt(this.state.num2)
        })
    }
render(){
    return(
        <div>
        <h1>Simple Calculator</h1>
            <label for="num1">Number 1:</label>
            <input type="number" id="num1" value={this.state.num1} onChange={this.handlenum1}/>
            <label for="num2">Number 2:</label>
            <input type="number" id="num2" value={this.state.num2} onChange={this.handlenum2}/>
            <button onClick={this.addition}>Add</button>
            <button onClick={this.subtraction}>Sub</button>
            <button onClick={this.multiplication} >Mul</button>
            <button onClick={this.division}>Div</button>
            <h3>Output : {this.state.total}</h3>
        </div>
    )
}
}

export default Calc;