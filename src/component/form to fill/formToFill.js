import React, { useEffect, useState } from 'react';
import { getFormById } from '../api/formApi'
import { useSelector } from 'react-redux';
import DrawQuestionToFill from './drawQuestionToFill'
import { saveForm } from '../../redux/actions/formAction';
import { useDispatch } from 'react-redux';


function FormToFill(props) {
  const [form, setForm] = useState([])

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
  //const form = useSelector(state => state.form);
  return (<div>
    results {props.formId}
    <img src="../_b1.png" className='img' no-repeat="true" />

    {form && <div className="">{form.name}
    <DrawQuestionToFill questionList={form.questionList} /></div>}
    
  </div>)
}
export default FormToFill;
