import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Typography, TextField } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
// import { button } from '../../../style';
import { useDispatch } from 'react-redux';
import { saveAnswersList } from '../../../redux/actions/formAction';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

// function valuetext(value) {
//   return `${value}°C`;
// }

function DiscreteSlider(props) {
  const classes = useStyles();
 // const buttonStyle = button();

  const [max, setMax] = useState(100);
  const [step, setStep] = useState(10);

  const marks = [{ value: 0, labal: '0' }, { value: 100, labal: '100' }]

  useEffect(() => {
    if (props.hasProp) {
      setMax(props.q.answers[0]);
      setStep(props.q.answers[1]);

    }
  }, []);

  useEffect(() => {

    dispatch(saveAnswersList([parseInt(max), parseInt(step)]));
  }, [max, step]);

  const dispatch = useDispatch();
  function valuetext(value) {
    return value;
  }

  return (
    <div className={classes.root}>

      {/* {props.hasProp && <Typography id="discrete-slider-always" gutterBottom>
        {props.q.theQuestion}
      </Typography>} */}
     { !props.hasProp && <div><div>enter max<input type="number" defaultValue={max} onBlur={(e) => setMax(e.target.value)} /></div>
        <div>enter step<input type="number" defaultValue={step} onBlur={(e) => setStep(e.target.value)} /></div></div>}
      {props.hasProp &&  <div><div>enter max<input type="number" defaultValue={props.q.answers[0]} onBlur={(e) => setMax(e.target.value)} /></div>
        <div>enter step<input type="number" defaultValue={props.q.answers[1]} onBlur={(e) => setStep(e.target.value)} /></div></div>}
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        valueLabelDisplay="on"
        step={step}
        marks={marks}

        //לא הצלחנו לסדר את המינימום
        min={0}
        max={max}
      />

    </div>
  );
}
export default DiscreteSlider;
