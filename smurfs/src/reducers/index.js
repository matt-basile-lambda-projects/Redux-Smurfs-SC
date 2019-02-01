import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_START,
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
    };
    case DELETE_SMURF_START:
    return{
      ...state,
      isDeletingSmurf: true,
      error: null
    };
    case DELETE_SMURF_SUCCESS:
    return{
      ...state,
      isDeletingSmurf: false,
      error: null,
      smurfs: payload,
    };
    case DELETE_SMURF_FAILURE:
    return{
      ...state,
      isDeletingSmurf: false,
      error: payload,
    };
    case UPDATE_SMURF_START:
    return{
      ...state,
      isUpdatingSmurf: true,
      error: null
    };
    case UPDATE_SMURF_SUCCESS:
    return{
      ...state,
      isUpdatingSmurf: false,
      error: null,
      smurfs: payload,
    };
    case UPDATE_SMURF_FAILURE:
    return{
      ...state,
      isUpdatingSmurf: false,
      error: payload,
    };


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
