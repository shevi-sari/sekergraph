import React, { useState, useEffect } from 'react';
import { textFeild } from '../../style';
import MultySelectToFill from './multySelectToFill';
import OneAnswerToFill from './oneAnswerToFill';
import RegionToFill from './regionToFill'
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm } from '../../redux/actions/formAction';
import './drawQuestionToFill.css'

import {saveAnswer} from '../../redux/actions/surveyedAction'

 

  


function DrawQuestionToFill(props) {
    const [value, setValue] = React.useState('');
    // const [theAnswer, setTheAnswer] = useState();
    

    const form = useSelector(state => state.form.form);
    const dispatch = useDispatch();

    

  const answersList= useSelector(state => state.surveyed.answerList);


  useEffect(()=>{
    answersList[props.index]=value;
    dispatch(saveAnswer([...answersList]));
  },[value])
  const handleChange = (event) => {
    setValue(event.target.value);
    
    
  };
    // useEffect(() => {
    //     console.log('props',props);
    //     console.log('form',form);
    //     if (form && form.questionList) {

    //         form.questionList.map((q) => {
    //             if (q.theQuestion === props.questionList[0].theQuestion)
    //                 form.questionList.theQuestion = theQuestion;
    //             dispatch(saveForm(form));
    //         })
    //     }
    // }, [theQuestion]);

useEffect(()=>{
console.log('redux',form);
},[])

    return(
    <div>
      { form && form.questionList.map((q,i) => {
            return (
                <div className="answer" >
                    <span>שאלה {i+1}</span>
                    
                    {q.questionKind === 10 && <div>
                        <div >{q.theQuestion}</div>
                        
                    <TextField id="standard-basic"
                        onBlur={handleChange}
                        InputProps={{ style: { color: "white", } }}
                        InputLabelProps={{ style: { color: "white", } }}
                        className={textFeild.root}
                    // defaultValue={q.theQuestion}
                    /></div>}
  
                    {q.questionKind === 20 &&
                        <RegionToFill question={q} index={i} />}

                    {q.questionKind === 20 &&
                        <OneAnswerToFill question={q} index={i}/>}
                    {q.questionKind === 20 &&
                        <MultySelectToFill question={q} index={i} />}
                </div>
            
        )}
        )}</div>)

                }
export default DrawQuestionToFill;

