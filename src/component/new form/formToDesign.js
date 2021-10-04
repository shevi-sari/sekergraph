import React, { useState, useEffect } from 'react';
import { Button, TextField, Fab, Select, MenuItem, InputLabel, makeStyles, FormControl } from '@material-ui/core';
import FullListEmail from './fullListEmails';
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
import { saveQuestion, saveForm } from '../../redux/actions/formAction'

import DrawQuestion from './question/drawQuestion';


function FormToDesign(props) {

  const [showEmailList, setShowEmailList] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [theQuestion, setTheQuestion] = useState('');
  const [kind, setKind] = useState('');
  const [questionList, setQuestionList] = useState([])
  const [prop, setProp] = useState(false)
  const [nameOfForm, setNameOfForm] = useState('');

  const form = useSelector(state => state.formReducer)
  const emails = useSelector(state => state.formReducer.emails)
  const answers = useSelector(state => { ; return state.formReducer.answers })
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.hasProp) {
      setQuestionList(form.form.questionList);
      setProp(true);
      console.log("fff:", form.form.questionList);
    }
  }, []);
  useEffect(() => {
    if (sendEmail)
      sendForm()
  }, [sendEmail]);
  useEffect(() => {
  }, [questionList]);
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
    }

  }));

  const save = () => {
    toSaveForm(form);
    setOpenAlert(true);
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
  const addFormToRedux = () => {
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
      managerId: JSON.parse(sessionStorage.getItem('User')).user._id,
      emails: emails,
      questionList: [...questionList, quest]
    }
    dispatch(saveForm(myForm))
    //setDraw(false);
    setKind(0);
    console.log("ans2:", answers);
  }

  return (<div className="paper">
    <div>design <br />

      <Button className={buttonStyle.root} variant="contained" onClick={save} >save</Button>
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
        <DialogActions>
          <Button onClick={closeOpenAlert} color="primary">
            NO
          </Button>
          <Button onClick={yes} color="primary" autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>

      <Button className={buttonStyle.root} variant="contained" onClick={emailList} >email to send</Button><br />
      <div style={{ display: showEmailList ? 'none' : 'block' }}> <FullListEmail /></div>
      <div>
        <TextField id="standard-basic"
          onBlur={(e) => {
            setNameOfForm(e.target.value)
          }}
          InputProps={{
            style: {
              color: "white",
            }
          }}
          InputLabelProps={{
            style: {
              color: "white",
            }
          }}
          className={textFeildStyle.root}
          label="name of the form"

        />
      </div >
      <Fab

        onClick={addFormToRedux}
        variant="extended"
        size="medium"
        color="secondary"
        aria-label="add"
        // className={classes.margin}
        className={buttonStyle.root}
      >
        <AddIcon className={classes.extendedIcon} />
        add question
      </Fab>

      <div>

        <div className={"question"}>
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
              style={{ color: "white" }}
            >

              <MenuItem value={10}>open question</MenuItem>
              <MenuItem value={20}>region</MenuItem>
              <MenuItem value={30}>one selected</MenuItem>
              <MenuItem value={40}>multy selected</MenuItem>
            </Select>
          </FormControl>

          <TextField id="standard-basic"
            InputProps={{
              style: {
                color: "white",
              }
            }}
            InputLabelProps={{
              style: {
                color: "white",
              }
            }}

            className={textFeildStyle.root}
            label="enter a question"
            onBlur={(e) => {
              setTheQuestion(e.target.value)

            }}
          /></div>
        {(kind == 20) && <Region />}
        {(kind == 40 || kind == 30) && <CheckboxLabels />}

      </div >
      {prop && <DrawQuestion questionList={form.questionList} /> }

    </div>
  </div>)

}
export default FormToDesign;