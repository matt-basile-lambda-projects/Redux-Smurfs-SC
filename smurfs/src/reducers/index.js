import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS
} from '../actions'


const initialState = {
   smurfs: [],
   isFetchingSmurfs: false,
   isAddingSmurf: false,
   isUpdatingSmurf: false,
   isDeletingSmurf: false,
   error: null
 }


const smurfReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case FETCH_SMURF_START:
    return{
      ...state,
      isFetchingSmurfs: true,
      error: null
    };
    case FETCH_SMURF_SUCCESS:
    return{
      ...state,
      isFetchingSmurfs: false,
      error: null,
      smurfs: payload,
    };
    case FETCH_SMURF_FAILURE:
    return{
      ...state,
      isFetchingSmurfs: false,
      error: payload,
    }
    case ADD_SMURF_START:
    return{
      ...state,
      isAddingSmurf: true,
      error: null
    };
    case ADD_SMURF_SUCCESS:
    return{
      ...state,
      isAddingSmurf: false,
      error: null,
      smurfs: payload,
    };
    case ADD_SMURF_FAILURE:
    return{
      ...state,
      isAddingSmurf: false,
      error: payload,
    }
    default:
        return state
  }
  
}

export default smurfReducer

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
