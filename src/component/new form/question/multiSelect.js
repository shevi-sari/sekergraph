import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';
import { textFeild } from '../../../style';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
function CheckboxLabels() {
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
    useEffect(() => {

        let num = (answersArray.indexOf(ansToRemove))
        const atempAns = (answersArray.splice(num, 1));
        setTmp(!tmp);
    }, [ansToRemove]);
    useEffect(() => {


    }, [tmp]);
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
        setAnswersArray([...answersArray, tmpAns])
        setTmpAns("")
    }



    return (<div>
 {/* <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        /> */}
        <FormGroup row>

            {answersArray.map(answer => <div>
                <Grid container className={classes.root} >
                    
                    <Grid item xs={8}>{answer}
                       
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                            <DeleteIcon
                                onClick={() => {
                                    SetAnsToRemove(answer)
 }}/>
                        </Fab>
   </Grid>
                </Grid>
            </div>
            )}
            <TextField id="standard-basic"
                InputProps={{
                    style: {
                        color: "white", }
                }}
                InputLabelProps={{
                    style: {
                        color: "white",
                    }
                }}
                className={classes.root}
                label="enter a answer"
                value={tmpAns}
                onChange={(e) => { setTmpAns(e.target.value) }}
            />
            <button onClick={addAns}>הוסף תשובה</button>

        </FormGroup>
    </div>);
}
export default CheckboxLabels;