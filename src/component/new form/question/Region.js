import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { button } from '../../../style';
import { connect } from 'react-redux';
import { saveAnswersList } from '../../../actions/formAction';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function DiscreteSlider(props) {
  const [answersArray, setAnswersArray] = useState([0, 100, 10]);
  const classes = useStyles();
  const buttonStyle = button();

  const [min, setMin] = useState();
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(10);

  useEffect(() => {
    setAnswersArray([min, max, step]);
    props.saveAnswersList(JSON.stringify(answersArray));
    console.log('vhbjhn', answersArray);
  }, [min, max, step]);

  return (
    <div className={classes.root}>
      <div>enter min<input type="number" onBlur={(e) => setMin(e.target.value)} /></div>
      <div>enter max<input type="number" onBlur={(e) => setMax(e.target.value)} /></div>
      <div>enter step<input type="number" onBlur={(e) => setStep(e.target.value)} /></div>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={step}
        marks
        //לא הצלחנו לסדר את המינימום
        min={0}
        max={max}
      />

    </div>
  );
}
export default connect(null, { saveAnswersList })(DiscreteSlider);
