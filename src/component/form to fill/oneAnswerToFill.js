import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useDispatch,useSelector} from 'react-redux'
import {saveAnswer} from '../../redux/actions/surveyedAction'

 function OneAnswerToFill(props) {
  const [value, setValue] = React.useState('');

  

  const answersList= useSelector(state => state.surveyed.answerList);
  const dispatch = useDispatch();

  useEffect(()=>{
    answersList[props.index]=value;
    dispatch(saveAnswer([...answersList]));
  },[value])
  const handleChange = (event) => {
    setValue(event.target.value);
    
    
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.question.theQuestion}</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      {props.question.answers && props.question.answers.map((a)=>{
             return(
                <FormControlLabel value={a} control={<Radio />} label={a} />
          )
         })} 
      </RadioGroup>
    </FormControl>
  );
}
export default OneAnswerToFill;