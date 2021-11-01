import React, { useState, useEffect } from 'react';
import { textFeild } from '../../style';
import MultySelectToFill from './multySelectToFill';
import OneAnswerToFill from './oneAnswerToFill';
import RegionToFill from './regionToFill'
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm } from '../../redux/actions/formAction';
import './drawQuestionToFill.css'

import { saveAnswer } from '../../redux/actions/surveyedAction'






function DrawQuestionToFill(props) {
    const [value, setValue] = React.useState('');
    //const [openQuestion, setTheAnswer] = useState();


    const form = useSelector(state => state.form.form);
    const dispatch = useDispatch();



    const answersList = useSelector(state => state.surveyed.answerList);


    const handleChange = (event) => {
      //  console.log("event:", event.target);
        setValue(event.target.value);
        answersList[event.target.id] = event.target.value;
        dispatch(saveAnswer([...answersList]));
  

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

    useEffect(() => {
        console.log('redux', form);
    }, [])

    return (
        <div>
            {form && form.questionList.map((q, i) => {
                return (
                    <div className="answer" >
                        <span>שאלה {i + 1}</span>

                        {q.questionKind === 10 && <div>
                            <div >{q.theQuestion}</div>

                            <TextField id="standard-basic"
                                id={i}
                                onBlur={handleChange}
                                InputProps={{ style: { color: "white", } }}
                                // InputLabelProps={{ style: { color: "white", } }}
                                className={textFeild.root}
                            // defaultValue={q.theQuestion}
                            /></div>}

                        {q.questionKind === 20 &&
                            <RegionToFill question={q} index={i} />}
                        {q.questionKind === 30 &&
                            <OneAnswerToFill question={q} index={i} />}
                        {q.questionKind === 40 &&
                            <MultySelectToFill question={q} index={i} />}
                    </div>

                )
            }
            )}</div>)

}
export default DrawQuestionToFill;

