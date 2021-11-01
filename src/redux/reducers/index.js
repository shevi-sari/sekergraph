import {combineReducers} from "redux";
import {userReducer} from './userReducer';
import {formReducer} from './formReducer';
import {surveyedReducer} from './surveyedReducer'


export default  combineReducers({
  form: formReducer,
  user: userReducer,
  surveyed:surveyedReducer
})