import React, { useEffect, useState } from 'react';
import { getFormById } from '../api/formApi'
import { useSelector } from 'react-redux';
import DrawQuestionToFill from './drawQuestionToFill'
import { saveForm } from '../../redux/actions/formAction';
import { useDispatch } from 'react-redux';
// import './formToFill.css'
import { Button } from '@material-ui/core';
import { sendAnswerList } from '../api/surveyedApi';
import './formToFill.css'
function FormToFill(props) {
  const [form, setForm] = useState([])
  const answersList = useSelector(state => state.surveyed.answerList);

  const dispatch = useDispatch();

  useEffect( () => {
    async function asyncfun(){
    getFormById(props.formId)
      .then((data) => {
        setForm(data);
        dispatch(saveForm(data));
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });}
      asyncfun()
  }, []);

  const send = () => {
  //  console.log(props.email);
    let fullForm = {
      email: props.email,
      forms: [{
        formId: props.formId,
        answers:answersList}]
    }
    sendAnswerList(fullForm)
  }
  //const form = useSelector(state => state.form);
  return (<div className="questions">

    <img src="../../_b1.png" className='img' no-repeat="true" />

    {form && <div >{form.name}
      <DrawQuestionToFill questionList={form.questionList} /></div>}
    <button className='buttonSend' onClick={send}>send</button>
  </div>)
}
export default FormToFill;
