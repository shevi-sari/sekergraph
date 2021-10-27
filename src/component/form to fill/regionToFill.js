import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';




const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));


 function RegionToFill(props) {
 const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        {props.question.theQuestion}
      </Typography>
      <Slider
        max={props.question.answers[0]}
        defaultValue={20}
        aria-labelledby="discrete-slider-custom"
        step={props.question.answers[1]}
        valueLabelDisplay="auto"
        marks
      />
    </div>
  );
}
export default RegionToFill