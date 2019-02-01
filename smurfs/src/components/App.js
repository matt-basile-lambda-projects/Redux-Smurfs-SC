import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf} from '../actions';
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
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
          {this.props.smurfs.map(smurf=>{
            return <li key={smurf.id}>{smurf.name}</li>
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
 addSmurf
  }
)(App);