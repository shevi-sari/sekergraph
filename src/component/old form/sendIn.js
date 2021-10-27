import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
//import Icon from '@material-ui/core/Icon';

function DateAndTimePickers() {
  const [showTiming, setShowTiming] = useState(true);

  const now = () => {

  }
  const after = () => {

  }
  const timing = () => {
    setShowTiming(false)
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
    <Button variant="contained" color="secondary" onClick={now}>now</Button>
    <Button variant="contained" color="secondary" onClick={timing}>timing</Button>

    <div style={{ display: showTiming ? 'none' : 'block' }}>
        {/* DIV אפשרות הסרת ה 
    <div onClick={setShowTiming(true)}>x</div>
    <span class="material-icons ">
      clear
    </span> */}

      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="set date and time"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Button variant="contained" color="secondary" onClick={after}>send</Button>
    </div>
  </div>
  );
}
export default DateAndTimePickers;
