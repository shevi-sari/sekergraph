import React, { useEffect, useState } from 'react';
import { getFormById } from '../api/formApi'
import { useSelector } from 'react-redux';
import DrawQuestionToFill from './drawQuestionToFill'
import { saveForm } from '../../redux/actions/formAction';
import { useDispatch } from 'react-redux';
import './formToFill.css'
import { Button } from '@material-ui/core';
import { sendAnswerList } from '../api/surveyedApi';

function FormToFill(props) {
  const [form, setForm] = useState([])
  const answersList = useSelector(state => state.surveyed.answerList);

  const dispatch = useDispatch();

  useEffect(async () => {
    getFormById(props.formId)
      .then((data) => {
        setForm(data);
        dispatch(saveForm(data));
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }, []);

  const send = () => {
    let fullForm = {
      email: '',
      forms: [{
        formId: props.formId,
        answers:answersList}]
    }
    sendAnswerList(fullForm)
  }
  //const form = useSelector(state => state.form);
  return (<div className="questions">

    <img src="../_b1.png" className='img' no-repeat="true" />

    {form && <div >{form.name}
      <DrawQuestionToFill questionList={form.questionList} /></div>}
    <Button color="secondary" onClick={send}>send</Button>
  </div>)
}
export default FormToFill;
