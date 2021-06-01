import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import FullListEmail from './fullListEmails';
import FormToDesign from '../formToDesign';
function NewForm() {
  const [showEmailList, setShowEmailList] = useState(true);
  const save = () => {

  }
  const emailList = () => {
    setShowEmailList(false)
  }
  return (<div>
    <div>
      <Button variant="contained" color="secondary" onClick={save}>save</Button>
      <Button variant="contained" color="secondary" onClick={emailList}>email to send</Button>
      <div style={{display:showEmailList ?'none' : 'block' }}> <FullListEmail/></div> 
    </div>
    <FormToDesign/>
  </div>)
 
}
export default NewForm;
