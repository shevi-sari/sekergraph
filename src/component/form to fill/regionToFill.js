import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux'
import { saveAnswer } from '../../redux/actions/surveyedAction'






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
    const answersList = useSelector(state => state.surveyed.answerList);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    useEffect(() => {
        answersList[props.index] = value;
        dispatch(saveAnswer([...answersList]));
    }, [value])
    const handleChange = (event,newv) => {
        setValue(newv);


    };

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-custom" gutterBottom>
                {props.question.theQuestion}
            </Typography>
            <Slider
                max={props.question.answers[0]}
                aria-labelledby="discrete-slider-always"
                defaultValue={20}
                valueLabelDisplay="on"
                step={props.question.answers[1]}
                onChange={handleChange}
                marks
            />
        </div>
    );
}
export default RegionToFill