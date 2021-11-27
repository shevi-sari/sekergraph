
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import DateAndTimePickers from './sendIn';
import EmailList from './emailList';
import { useSelector } from 'react-redux';
import Menu from '../enter/menu';

function FormDetailes() {
  const [value, setValue] = React.useState('emailes');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [showTiming, setShowTiming] = useState(true);
  const [showEmailList, setShowEmailList] = useState(true);
  const history = useHistory();
  const form = useSelector(state => state.form.form);
  const newForm = () => {
    history.push('/formToDesign');
    // window.location.reload();
  }
  const results = () => {
    console.log("form:::::::::", form);
    history.push('/results');
    //   window.location.reload();
  }

  const sendBy = () => {

    setShowTiming(false)
  }
  const showEmails = () => {
    setShowEmailList(!showEmailList)
  }


  return (<div>
    <Menu />
    <Box sx={{ width: '100%', color: 'white' }}>
      <Tabs
        value={value}
        onClick={handleChange}
        textColor="primery"
        indicatorColor="white"
        aria-label="secondary tabs example"
      >
        <Tab labal="re-edit" value="re-edit" onClick={newForm} />
        <Tab labal="send" value="send" onClick={sendBy} />
        <Tab labal="emailes" value="emailes" onClick={showEmails} />
        <Tab labal="view results" value="view results" onClick={results} />

      </Tabs>
    </Box>
    <div style={{ display: showTiming ? 'none' : 'block' }}> <DateAndTimePickers /></div>
    <div style={{ display: showEmailList ? 'none' : 'block' }}> <EmailList /></div>
    <Box square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="emails" onClick={showEmails} />
        <Tab label="re-edit" onClick={newForm} />
        <Tab label="send" onClick={sendBy} />
        <Tab label="view result" onClick={results} />
      </Tabs>
    </Box>
    {/* );
  

//     return <div>
//         <Menu/>
//         <Button variant="contained" color="secondary" onClick={newForm}>re-edit </Button>
//         <Button variant="contained" color="secondary" onClick={sendBy}>send</Button>
//         <Button variant="contained" color="secondary" onClick={showEmails}>emailes</Button>
//         <Button variant="contained" color="secondary" onClick={results}>view results</Button>
        // <div style={{ display: showTiming ? 'none' : 'block' }}> <DateAndTimePickers /></div>
        // <div style={{ display: showEmailList ? 'none' : 'block' }}> <EmailList /></div>
        // {!showEmailList && <EmailList/>}                                                    */}
  </div>
  )
}
export default FormDetailes;