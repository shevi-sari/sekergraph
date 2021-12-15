import React, { useState, useEffect } from 'react';
import {  TextField, makeStyles } from '@material-ui/core';
// import FullListEmail from './fullListEmails';
import { textFeild, button } from '../../style'
// import CheckboxLabels from './question/multiSelect';
// import AddIcon from '@material-ui/icons/Add';
// import Region from './question/region';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { sendForm, toSaveForm, updateForm } from '../api/formApi'
// import './newForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveQuestion, saveForm } from '../../redux/actions/formAction'
import './formToDesign.css'
import DrawQuestion from './question/drawQuestion';



function FormToDesign(props) {

  // const [showEmailList, setShowEmailList] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [theQuestion, setTheQuestion] = useState('');
  const [kind, setKind] = useState('');
  const [questionList, setQuestionList] = useState([])
  const [prop, setProp] = useState(false)
  const [nameOfForm, setNameOfForm] = useState('');

  const form = useSelector(state => state.form.form)
  const emails = useSelector(state => state.form.emails)
  const answers = useSelector(state => { ; return state.form.answers })
  const user = useSelector(state => state.user.user)

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
    form.name = nameOfForm;
    dispatch(saveForm(form))
  }, [nameOfForm]);


  // const emailList = () => {
  //   setShowEmailList(!showEmailList)
  // }
  // const textFeildStyle = textFeild();
  // const buttonStyle = button();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    InputLabel: {
      color: 'white'
    }

  }));

  const updateFormInReact = async () => {
    await updateForm(form._id, form);
   // setOpenAlert(true);
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
    // debugger
    let myForm = {
      name: nameOfForm,
      date: new Date(),
      managerId: user._id,
      emails: emails,
      questionList: [...questionList, quest]
    }
    dispatch(saveForm(myForm))
    //setDraw(false);
    setKind(0);
    console.log("ans2:", answers);
  }

  return (<div className="paper">
    <div> <br />
      <TextField id="standard-basic"
        onBlur={(e) => { setNameOfForm(e.target.value) }}
        InputProps={{ style: { color: "white", } }}
        InputLabelProps={{ style: { color: "white", } }}
        className={textFeild.root}
        defaultValue={form.name}
      />

   <div className='showQuestion'>
      <DrawQuestion questionList={form.questionList} />
      <button className='save' onClick={updateFormInReact}>save</button></div>
    </div>
  </div>)

}
export default FormToDesign;