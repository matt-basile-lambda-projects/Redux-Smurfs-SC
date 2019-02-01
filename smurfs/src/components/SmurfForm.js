import React, { Component } from 'react'

export default class SmurfForm extends Component {
constructor(props){
    super(props);
    this.state={
        newSmurf:{
            name: '',
            age:null,
            height: '',
        }
    }
}
handleChanges = e =>{
    this.setState({newSmurf:{
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
    }})
    if(e.target.name === 'height'){
        this.setState({newSmurf:{
            ...this.state.newSmurf,
            height: `${e.target.value}cm`
        }})
    }
}
addNewSmurf = e =>{
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    e.target.reset();
}


  render() {
    return (
      <div>
        <h1>Smurf Form</h1>
        <form onSubmit={e =>this.addNewSmurf(e)}>
            <input onChange={this.handleChanges} type="text" name="name" placeholder="What's this Smurfs Name?"/>
            <input onChange={this.handleChanges} type="number" name="age" placeholder="How Old is this Smurf?"/>
            <input onChange={this.handleChanges} type="text" name="height" placeholder="How Tall is this Smurf?"/>
            <button>Submit Smurf</button>
        </form>
      </div>
    )
  }
}
