import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function Region() {
  const classes = useStyles();

  const [min, setMin] = useState("10");
  const [max, setMax] = useState('100');
  const [step, setStep] = useState('10');

  const marks = [
    min, max
  ];
  return (
    <div className={classes.root}>
      <br/>
      <div>enter min<input onBlur={(e)=>setMin(e.target.value)}/></div>
      <div>enter max<input onBlur={(e)=>setMax(e.target.value)}/></div>
      <div>enter step<input onBlur={(e)=>setStep(e.target.value)}/></div>
      <Typography id="discrete-slider" gutterBottom>
        the question
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={step}
        min={min}
        max={max}
        
      />
    </div>
  );
}
