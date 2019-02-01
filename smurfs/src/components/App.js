import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf, deleteSmurf} from '../actions';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  deleteASmurf= (e,id) =>{
    e.preventDefault();
    this.props.deleteSmurf(id)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
          {this.props.smurfs.map(smurf=>{
            return <li key={smurf.id}>{smurf.name}
            <button onClick={(e)=> this.deleteASmurf(e, smurf.id)}>X</button>
            </li>
          })}
        </ul>
        <SmurfForm
        addSmurf={this.props.addSmurf}
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
 deleteSmurf
  }
)(App);