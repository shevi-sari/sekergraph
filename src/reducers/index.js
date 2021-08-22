import {combineReducers} from "redux";
//import {userReducer} from './userReducer';
import {formReducer} from './formReducer';


export default  combineReducers({
  form: formReducer
})