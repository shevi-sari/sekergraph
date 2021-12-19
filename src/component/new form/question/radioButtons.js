
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { textFeild } from '../../../style';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import { useSelector, useDispatch } from 'react-redux';
import { saveAnswersList } from '../../../redux/actions/formAction';
import { button } from '../../../style'
import './multiSelect.css'
// import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import { Radio } from '@material-ui/core/Radio';
import Radio from '@mui/material/Radio';
import  RadioGroup  from '@mui/material/RadioGroup';

function DadioButtons(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });
    const [answersArray, setAnswersArray] = useState([]);
    const [tmpAns, setTmpAns] = useState("");
    const [ansToRemove, SetAnsToRemove] = useState('');
    const [tmp, setTmp] = useState(true);
    const [answer, setAnswer] = useState("")
    const [answerIndex, setAnswerIndex] = useState("")
    const dispatch = useDispatch();
    // const answers = useSelector(state => state.form.answers)

    // const [hasProps, setHasProps] = useState(false);
    useEffect(() => {


        let answerTemp = answersArray
        answerTemp[answerIndex] = answer
        setAnswersArray([...answerTemp])
        dispatch(saveAnswersList(answerTemp));

    }, [answer]);
    useEffect(() => {
        if (props.hasProp)
            setAnswersArray([...props.q.answers]);


    }, []);
    useEffect(() => {
        let num = (answersArray.indexOf(ansToRemove))
        const atempAns = (answersArray.splice(num, 1));
        dispatch(saveAnswersList(answersArray));
        setTmp(!tmp);
    }, [ansToRemove]);

    const buttonStyle = button();
    const GreenCheckbox = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const classes = textFeild();


    const addAns = () => {
        if (tmpAns != '') {
            console.log("props.hasProp:::::::", props.hasProp);
            setAnswersArray([...answersArray, tmpAns]);
            setTmpAns("");
            dispatch(saveAnswersList([...answersArray, tmpAns]));
        }
        // setHasProps(true);

    }



    return (<div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup row>
                {/* {props.hasProp && <label>{props.q.theQuestion}</label>} */}
                <div className="answerOnMulty">
                    {answersArray.map((answer, i) => <div>

                        <Grid container className={classes.root} >   <span>{i + 1}.</span>
                            <FormControlLabel
                                control={<Radio defaultChecked={answersArray[0]} onChange={handleChange} name="checkedA"color='secondary'/>}
                            />

                            <div >
                                <Grid item xs={8} style={{ "max-width": "10rem" }}>
                                    <TextField id="standard-basic"
                                        InputProps={{ style: { color: "white", } }}
                                        InputLabelProps={{ style: { color: "white", } }}
                                        className={classes.root}
                                        value={answer}
                                        onChange={(e) => { setAnswer(e.target.value); setAnswerIndex(i) }}
                                    />
                                    <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                                        <DeleteIcon
                                            onClick={() => {
                                                SetAnsToRemove(answer)
                                            }} />
                                    </Fab>
                                </Grid></div>
                        </Grid>
                    </div>
                    )}

                    <TextField id="standard-basic"
                        InputProps={{ style: { color: "white", } }}
                        InputLabelProps={{ style: { color: "white", } }}
                        className={classes.root}
                        label="enter a answer"
                        value={tmpAns}
                        onChange={(e) => { setTmpAns(e.target.value); }}
                    />
                    <Button className={buttonStyle.root} onClick={addAns}>add a answer</Button></div>
            </RadioGroup></FormControl>
        <div className={classes.root}>




        </div>
    </div>);
}
export default DadioButtons;
