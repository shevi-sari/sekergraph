import React from 'react';
import NewForm from '../new form/newForm';
import { useSelector } from 'react-redux';


function Results() {
  const form = useSelector(state => state.form);
  return (<div>
    result!
  </div>)
}
export default Results;
