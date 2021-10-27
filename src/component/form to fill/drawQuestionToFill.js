import React, { useState, useEffect } from 'react';
import { textFeild } from '../../style';
import MultySelectToFill from './multySelectToFill';
import OneAnswerToFill from './oneAnswerToFill';
import RegionToFill from './regionToFill'
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm } from '../../redux/actions/formAction';


function DrawQuestionToFill(props) {

    const [theAnswer, setTheAnswer] = useState();
    

    const form = useSelector(state => state.form.form);
    const dispatch = useDispatch();

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
                <div  >
                    <span> {i+1}</span>
                    
                    {q.questionKind === 20 && <div>
                        <span>{q.theQuestion}</span>
                    <TextField id="standard-basic"
                        onBlur={(e) => { setTheAnswer(e.target.value) }}
                        InputProps={{ style: { color: "white", } }}
                        InputLabelProps={{ style: { color: "white", } }}
                        className={textFeild.root}
                    // defaultValue={q.theQuestion}
                    /></div>}

                    {q.questionKind === 20 &&
                        <RegionToFill question={q}  />}

                    {q.questionKind === 20 &&
                        <OneAnswerToFill hasProp={true} q={q} />}
                    {q.questionKind === 20 &&
                        <MultySelectToFill hasProp={true} q={q} />}
                </div>
            
        )}
        )}</div>)

                }
export default DrawQuestionToFill;