import React, { useState, useEffect } from 'react';
import { Button, TextField, Fab, Select, MenuItem, InputLabel, makeStyles, FormControl } from '@material-ui/core';
import FullListEmail from './fullListEmails';
// import FormToDesign from './formToDesign';
import { textFeild, button } from '../../style'
import CheckboxLabels from './question/multiSelect';
import AddIcon from '@material-ui/icons/Add';
import Region from './question/region';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { sendForm, toSaveForm } from '../api/formApi'
import './newForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveQuestion, saveForm ,initialState} from '../../redux/actions/formAction'
import DrawQuestion from './question/drawQuestion';
import Menu from '../enter/menu'
import { useHistory } from "react-router-dom";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { ScheduleApi } from './../api/formApi';
import RadioButtons from './question/radioButtons';
function NewForm(props) {
  const [showEmailList, setShowEmailList] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [theQuestion, setTheQuestion] = useState('');
  const [kind, setKind] = useState('');
  const [questionList, setQuestionList] = useState([])
  // const [formName, setFormName] = useState('')
  const [nameOfForm, setNameOfForm] = useState('');
  const [hasEmpty, setHasEmpty] = useState(true);
  const [time, setTime] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [showTiming, setShowTiming] = useState(true);


  const form = useSelector(state => state.form.form)
  const emails = useSelector(state => state.form.emails)
  const answers = useSelector(state => { ; return state.form.answers })
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(initialState());
  }, []);
 
  useEffect(() => {
    if (sendEmail)
      sendForm(form)
  }, [sendEmail]);

  useEffect(() => {
    setKind('');
    setTheQuestion('');
  }, [questionList]);
  useEffect(() => {
    if (theQuestion === '' || kind === '')
      setHasEmpty(true)
    else
      setHasEmpty(false)
  }, [theQuestion, kind]);

  const emailList = () => {
    setShowEmailList(!showEmailList)
  }
  const textFeildStyle = textFeild();
  const buttonStyle = button();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    InputLabel: {
      color: 'white'
    },
    button: {
      background: '#e06c79',
      // color: 'white',
      'border-top-left-radius': '1.5625rem',
      'border-bottom-left-radius': '1.5625rem',
      width: '12rem',
      height:'2.5rem',
      'margin':'0.5rem',
      'margin-right':'0rem'
      // 'font-size': '1rem',
      // padding: '0.5rem 2rem',
      // 'margin-top': '2rem',
      // top: '8rem'
      // 'font-size':'0.85rem'
    }

  }));

  const save = () => {
    // debugger
    addFormToRedux()
debugger
    toSaveForm(form)
    .then((res) => { 
      dispatch(saveForm(res));
    history.push('/home'); })
    .then(setOpenAlert(true))
    .catch((err)=>
      {console.log(err)
        })
    
  };
  const closeOpenAlert = () => {
    setOpenAlert(false);
  };

  const classes = useStyles();

  const handleChange = (event) => {
    setKind(event.target.value);
    //setDraw(true);
  };

  const CloseOpenQuestion = () => {
    setOpenQuestion(false);
  };

  const OpenOpenQuestion = () => {
    setOpenQuestion(true);
  };

  const sending = () => {
    setSendEmail(true);
  }
  const yes = () => {
    closeOpenAlert();
    sending();
  }
  const timing = () => {
    closeOpenAlert();
    setShowTiming(false)
  }
  const after = () => {
    ScheduleApi(time);
  }
  const addFormToRedux = () => {
    // debugger
    console.log("ans:", answers);

    let quest = {
      theQuestion: theQuestion,
      questionKind: kind,
      answers: answers
    }

    dispatch(saveQuestion(quest));
    console.log(quest);
    setQuestionList([...questionList, quest])
    let myForm = {
      name: nameOfForm,
      date: new Date(),
      managerId: user._id,
      emails: emails,
      questionList: [...questionList, quest]
    }
    dispatch(saveForm(myForm))
    //setDraw(false);
    setKind('');
    setTheQuestion('');
    document.getElementById("cleen").value = "";
    console.log("ans2:", kind);
  }

  return (<div >
    <div className="paper">
      <div className="buttonDiv">
        <div className="buttonDiv">
          <button className={"buttonSave"} variant="contained" onClick={save} ><SaveAltIcon />save</button>
          <Dialog
            open={openAlert}
            onClose={closeOpenAlert}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you want to send this form now?
              </DialogContentText>
            </DialogContent>
            <DialogActions>e
              <Button onClick={timing} color="primary">
                SCHEDULE
              </Button>
              <Button onClick={yes} color="primary" autoFocus>
                YES
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div ><button className={'buttonSave'} onClick={emailList} ><AlternateEmailIcon style={{ padding: "0.25rem" }} />     email to send</button></div>
        <div style={{ display: showEmailList ? 'none' : 'block'}}> <FullListEmail /></div>
        {/* {  showEmailList && <FullListEmail/> } */}
      </div>

      <div className="questionList">
        <Menu />
        <div className="questionListIn">
          <TextField id="standard-basic"
            onBlur={(e) => { setNameOfForm(e.target.value) }}
            InputProps={{ style: { color: "white", } }}
            InputLabelProps={{ style: { color: "white", } }}
            className={textFeildStyle.root}
            label="name of the form"
          />


          <div>
            <div className={"question"}>
            


              <div style={{ display: showTiming ? 'none' : 'block' }}>
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
              <TextField id="standard-basic" id="cleen"
                InputProps={{ style: { color: "white", } }}
                InputLabelProps={{ style: { color: "white" } }}
                className={textFeildStyle.root}
                label="Question title"
                onMouseMove={(e) => { setTheQuestion(e.target.value) }}
              />
              <FormControl className={classes.formControl}>
                <InputLabel className={textFeildStyle.root} id="demo-controlled-open-select-label"
                  style={{ color: "white" }}>
                  question's kind</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openQuestion}
                  onClose={CloseOpenQuestion}
                  onOpen={OpenOpenQuestion}
                  value={kind}
                  onChange={handleChange}
                  style={{ color: "white", width: "10rem" }}
                >
                  <MenuItem value={10}>open question</MenuItem>
                  <MenuItem value={20}>region</MenuItem>
                  <MenuItem value={30}>one selected</MenuItem>
                  <MenuItem value={40}>multy selected</MenuItem>
                </Select>
              </FormControl>
             
             
              {(kind === 20) && <Region />}
              {(kind === 30) && <RadioButtons />}
              {(kind === 40) && <CheckboxLabels />}
              
              <Fab
                disabled={hasEmpty}
                onClick={addFormToRedux}
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="add"
                // className={classes.margin}
                className={buttonStyle.root}
              >
                <AddIcon className={classes.extendedIcon} />
                add an question
              </Fab>
            </div>
          </div >

          {questionList && <DrawQuestion questionList={questionList} />}
          {/* <FormToDesign /> */}
        </div >
      </div>
    </div>
  </div >)

}
export default NewForm;


