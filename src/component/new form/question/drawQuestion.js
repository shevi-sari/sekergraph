import React, { useState, useEffect } from 'react';
import { textFeild } from '../../../style';
import CheckboxLabels from '../question/multiSelect';
import Region from './region';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm } from '../../../redux/actions/formAction';
import './drawQuestion.css'

function DrawQuestion(props) {

    const [theQuestion, setTheQuestion] = useState();
    const [i, setI] = useState(0)

    const form = useSelector(state => state.form.form);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('props',props);
        console.log('form',form);
        if (form && form.questionList) {

            form.questionList.map((q) => {
                if (q.theQuestion === props.questionList[0].theQuestion)
                    form.questionList.theQuestion = theQuestion;
                dispatch(saveForm(form));
            })
        }
    }, [theQuestion]);

    return props.questionList.map((q) => {
        return (
            <div className="questionInList" >
                {q.questionKind === 10 && <TextField id="standard-basic"
                    onBlur={(e) => { setTheQuestion(e.target.value) }}
                    InputProps={{ style: { color: "white", } }}
                    InputLabelProps={{ style: { color: "white", } }}
                    className={textFeild.root}
                    defaultValue={q.theQuestion}
                />}

                {q.questionKind === 20 &&
                    <Region hasProp={true} q={q} />}

                {q.questionKind === 40 &&
                    <CheckboxLabels hasProp={true} q={q} />}
                {q.questionKind === 30 &&
                    <CheckboxLabels hasProp={true} q={q} />}
            </div>
        )
    })

}
export default DrawQuestion;