import React, { useState, useEffect } from 'react';
import { textFeild } from '../../../style';
import CheckboxLabels from '../question/multiSelect';
import Region from './region';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm, saveQuestion } from '../../../redux/actions/formAction';
import './drawQuestion.css'
import DeleteIcon from '@material-ui/icons/Clear';
import RadioButtons from './radioButtons';
function DrawQuestion(props) {
    const [questinToRemove, SetQuestionToRemove] = useState('');

    const [theQuestion, setTheQuestion] = useState();
    const [theQuestionIndex, setTheQuestionIndex] = useState();
    const [i, setI] = useState(0)
     const form = useSelector(state => state.form.form);
  const formAfterChange=form
    const questionList = useSelector(state => state.form.form.questionList);
    const questionListTochange=questionList
    useEffect(() => {
        if( questinToRemove ){
      
        questionListTochange.splice(SetQuestionToRemove, 1)
        dispatch(saveQuestion(questionListTochange));
        formAfterChange.questionList=questionListTochange;
        dispatch(saveForm(formAfterChange));

    }
     }, [questinToRemove]);
     useEffect(() => {
      
     }, [formAfterChange])
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('props', props);
        console.log('form', form);
        // debugger
        if (form && form.questionList) {


            form.questionList.map((q, j) => {

                if (theQuestionIndex === j) {
                  
                    if (questionList) {
                        const questionListAfterChange=questionList 
                        questionListAfterChange.theQuestion = theQuestion;
                        dispatch(saveQuestion(questionListAfterChange))
                        formAfterChange.questionList[theQuestionIndex].theQuestion = theQuestion;
                        // form.questionList[theQuestionIndex].theQuestion = theQuestion;
                    }
                }
                dispatch(saveForm(formAfterChange));
                dispatch(saveQuestion(questionList));
            })
        }


    }, [theQuestion]);

    return <div>
       
        {props.questionList &&props.questionList.map((q, i) => {
         return(
            <div  >
                  <DeleteIcon
                        onClick={() => {
                            SetQuestionToRemove(i)
                        }}
                    />
                    <div className="questionInList">
                <span className="white">{i + 1}</span>
                {/* <TextField id="standard-basic"
                    onBlur={(e) => { setTheQuestion(e.target.value) }}
                    InputProps={{ style: { color: "white", } }}
                    InputLabelProps={{ style: { color: "white", } }}
                    className={textFeild.root}
                    defaultValue={q.theQuestion}
                    value={q1}
                /> */}
                <TextField id="standard-basic"
                    onChange={(e) => { setTheQuestion(e.target.value); setTheQuestionIndex(i) }}
                    InputProps={{ style: { color: "white", } }}
                    InputLabelProps={{ style: { color: "white", } }}
                    className={textFeild.root}
                    defaultValue={q.theQuestion}
                />

                {q.questionKind === 20 &&
                    <Region hasProp={true} q={q} />}

                {q.questionKind === 40 &&
                    <CheckboxLabels hasProp={true} q={q} />}
                {q.questionKind === 30 &&
                <RadioButtons hasProp={true} q={q}/>
                  }
            </div></div>
      
      ) })}</div>

}
export default DrawQuestion;