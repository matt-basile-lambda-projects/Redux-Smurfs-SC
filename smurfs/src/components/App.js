import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf, deleteSmurf, updateSmurf, populatingSmurf} from '../actions';
import SmurfForm from './SmurfForm';
import SmurfHaus from '../smurf-house.png';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props)
    this.state={
    smurf:{
      name: '',
      age:null,
      height: '',
  }
  }
}
  componentDidMount(){
    this.props.getSmurfs();
  }
  deleteASmurf= (e,id) =>{
    e.preventDefault();
    this.props.deleteSmurf(id)
  }
  populateSmurf = (e, id) =>{
    e.preventDefault();
    console.log(this.props.smurfs)
    console.log(id)
    this.setState({smurf: this.props.smurfs.find(smurf => smurf.id === id)})
    this.props.populatingSmurf();
  }
  updateASmurf = e =>{
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf)
    e.target.reset()
  }

  handleChanges = e =>{
    this.setState({smurf:{
        ...this.state.smurf,
        [e.target.name]: e.target.value
  }})
    if(e.target.name === 'height'){
        this.setState({smurf:{
            ...this.state.smurf,
            height: `${e.target.value}cm`
        }})
    }
  }

addNewSmurf = e =>{
  e.preventDefault();
  this.props.addSmurf(this.state.smurf);
  e.target.reset();
  this.setState({
    smurf:{
      name: '',
      age:null,
      height: '',
    }
  })
  console.log(e.target)
}

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
          {this.props.smurfs.map(smurf=>{
            return <div key={smurf.id}>
                    <img src={SmurfHaus}/>
                    <h4>{smurf.name}</h4>
                    <button onClick={e =>this.populateSmurf(e, smurf.id)}>Update Smurf</button>  
                    <button onClick={(e)=> this.deleteASmurf(e, smurf.id)}>X</button>
                  </div>
          })}
        </ul>
        <SmurfForm
        addNewSmurf={this.addNewSmurf}
        updateASmurf={this.updateASmurf}
        handleChanges={this.handleChanges}
        smurf={this.state.smurf}
        isUpdatingSmurf={this.props.isUpdatingSmurf}
        />
      </div>
    );
  }
}


 const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isFetchingSmurfs: state.isFetchingSmurfs,
  isAddingSmurf: state.isAddingSmurf,
  isUpdatingSmurf: state.isUpdatingSmurf,
  isDeletingSmurf: state.isDeletingSmurf,
  error: state.error
});


export default connect(
  mapStateToProps,
  {
 getSmurfs,
 addSmurf,
 deleteSmurf,
 updateSmurf,
 populatingSmurf
  }
)(App);