import React, { Component } from 'react'

export default class SmurfForm extends Component {
constructor(props){
    super(props);
    this.state={
     
    }
}
handleSubmit = (e) =>{
    e.preventDefault();
    if(this.props.isUpdatingSmurf){
        this.props.updateASmurf(e);
    } else{
        this.props.addNewSmurf(e);
    }
}

  render() {
    return (
      <div>
        <h1>Smurf Form</h1>
        <form onSubmit={e =>this.handleSubmit(e)}>
            <input onChange={this.props.handleChanges} value={this.props.smurf.name} type="text" name="name" placeholder="What's this Smurfs Name?"/>
            <input onChange={this.props.handleChanges} value={this.props.smurf.age} type="number" name="age" placeholder="How Old is this Smurf?"/>
            <input onChange={this.props.handleChanges} value={this.props.smurf.height} type="text" name="height" placeholder="How Tall is this Smurf?"/>
            <button>Submit Smurf</button>
        </form>
      </div>
    )
  }
}
