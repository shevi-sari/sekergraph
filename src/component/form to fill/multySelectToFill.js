import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch,useSelector} from 'react-redux'
import {saveAnswer} from '../../redux/actions/surveyedAction'

  

 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

 function MultySelectToFill(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ });

  const answersList= useSelector(state => state.surveyed.answerList);
  const dispatch = useDispatch();

  useEffect(()=>{
    answersList[props.index]=state;
    dispatch(saveAnswer([...answersList]));
  },[state])
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.question.theQuestion} </FormLabel>
        <FormGroup>
         {props.question.answers && props.question.answers.map((a)=>{
             return(
            <FormControlLabel
            control={<Checkbox  onChange={handleChange} name={a} />}
            label={a}
          />)
         })} 
          
        </FormGroup>
  
      </FormControl>
     
     
    </div>
  );
}
export default MultySelectToFill