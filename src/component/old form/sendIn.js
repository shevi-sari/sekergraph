import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { ScheduleApi, sendForm } from './../api/formApi';
import { useSelector } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './sendIn.css'

function DateAndTimePickers() {
  const [showTiming, setShowTiming] = useState(false);
  const [newDate, setNewDate] = useState(new Date());
  const [time, setTime] = useState('');
  const form = useSelector(state => state.form.form);

  const now = () => {
    {setShowTiming(false)}
    sendForm(form)
  }
  const after = () => {
    {setShowTiming(false)}
    ScheduleApi(time,form);
  }
  const timing = () => {
    setShowTiming(true)
  }
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
    , root: {
      '& > span': {
        margin: theme.spacing(2),
      },
    }

  }));

  const classes = useStyles();

  return (<div>
        <ButtonGroup disableElevation variant="contained">

    <Button variant="contained" color="secondary" onClick={now}>now</Button>
    <Button variant="contained" color="secondary" onClick={timing}>schedule</Button>
</ButtonGroup>
    <div className={'schedule'}  style={{ display: showTiming ? 'block' : 'none' }}>
    
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="set date and time"
          type="datetime-local"
          defaultValue={newDate}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={(e) => { setTime(e.target.value) }}
        />
      </form>
      <Button variant="contained" color="secondary" onClick={after}>send</Button>
    </div>
  </div>
  );
}
export default DateAndTimePickers;

