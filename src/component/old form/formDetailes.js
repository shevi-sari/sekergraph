import React ,{useState}from 'react';
import { useHistory } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import DateAndTimePickers from './sendIn'
import EmailList from './emailList'

function FormDetailes() {
    const [showTiming, setShowTiming] = useState(true);
    const [showEmailList, setShowEmailList] = useState(true);
    const history = useHistory();
    const newForm = () => {

        history.push('/newForm')
    }
    const results = () => {

        history.push('/results')
    }

    const sendBy = () => {

        setShowTiming(false)
    }
    const showEmails = () => {
        setShowEmailList(!showEmailList)
    }
    return <div>
        <Button variant="contained" color="secondary" onClick={newForm}>re-edit</Button>
        <Button variant="contained" color="secondary" onClick={sendBy}>send</Button>
        <Button variant="contained" color="secondary" onClick={showEmails}>emailes</Button>
        <Button variant="contained" color="secondary" onClick={results}>view results</Button>
      <div style={{display:showTiming ?'none' : 'block' }}> <DateAndTimePickers/></div> 
      <div style={{display:showEmailList ?'none' : 'block' }}> <EmailList/></div>   
      {/* {!showEmailList && <EmailList/>}                                                    */}
    </div>
}
export default FormDetailes;