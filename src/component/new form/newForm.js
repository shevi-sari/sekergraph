import React, { useState, useEffect } from 'react';
import { Button, TextField, Fab, Select, MenuItem, InputLabel, makeStyles, FormControl } from '@material-ui/core';
import FullListEmail from './fullListEmails';
import FormToDesign from './formToDesign';
import { textFeild, button } from '../../style'
import CheckboxLabels from './question/multiSelect';
import AddIcon from '@material-ui/icons/Add';
import Region from './question/region';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { sendForm ,toSaveForm} from '../api/formApi'
import './newForm.css';
import { connect } from 'react-redux';
import { saveQuestion , saveForm} from '../../actions/formAction'

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

function NewForm(props) {
  const [showEmailList, setShowEmailList] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [theQuestion, setTheQuestion] = useState('');
  const [kind, setKind] = useState('');
const [questionList, setQuestionList]= useState([])

const ques={
  theQuestion:theQuestion,
  kind:kind,
  answersArray:sessionStorage.getItem('AnswersList')
}

  useEffect(() => {
    if (sendEmail)
      sendForm()
  }, [sendEmail]);
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
    toSaveForm();
    setOpenAlert(true);
  };
  const closeOpenAlert = () => {
    setOpenAlert(false);
  };

  const classes = useStyles();

  const handleChange = (event) => {
    setKind(event.target.value);
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
const addFormToRedux=()=>{
  
  let quest={
    theQuestion:theQuestion,
    questionKind:kind,
    answers:JSON.parse(sessionStorage.getItem('AnswersList'))
  }
  props.saveQuestion(JSON.stringify(quest));
  console.log(quest);
  setQuestionList([...questionList,quest])
  let myForm={
    name:theQuestion,
    date:new Date(),
    managerId:JSON.parse(sessionStorage.getItem('User')).user._id,
    emails:JSON.parse(sessionStorage.getItem('saveEmails')),
    
    questionList:questionList
  }
  props.saveForm(JSON.stringify(myForm));

}
  return (<div className="paper">
    <div>
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
      onClick= { addFormToRedux }                                 
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
          style={{color:"white"}}>
            question's kind</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openQuestion}
            onClose={CloseOpenQuestion}
            onOpen={OpenOpenQuestion}
            value={kind}
            onChange={handleChange}
            style={{color:"white"}}
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
    </div >
    <FormToDesign />


    {(kind == 20) && <Region />}
    {(kind == 40 || kind == 30) && <CheckboxLabels />}

    </div>
  </div>)

}
export default connect(null, { saveQuestion ,saveForm})( NewForm);

