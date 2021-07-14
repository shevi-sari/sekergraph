import React, { useState } from 'react';
import { Button, TextField, Fab, Select, MenuItem, InputLabel, makeStyles, FormControl } from '@material-ui/core';
//import FullListEmail from './fullListEmails';
import FormToDesign from './formToDesign';
import { textFeild, button } from '../../style'
import CheckboxLabels from './question/multiSelect';
import AddIcon from '@material-ui/icons/Add';
import Region from './question/Region'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function NewForm() {
  const [showEmailList, setShowEmailList] = useState(true);
  const [kind, setKind] = useState('');
  const [open, setOpen] = useState(false);
  const save = () => {

  }
  const emailList = () => {
    setShowEmailList(false)
  }
  const textFeild1 = textFeild();
  const button1=button();
  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    InputLabel: {
      color: 'white'
    }
  }));
  const classes = useStyles();


  const handleChange = (event) => {
    setKind(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (<div>
    <div>
      <Button className={button1.root} variant="contained" color="secondary" onClick={save} >save</Button><br /><br />
      <Button className={button1.root}variant="contained" color="secondary" onClick={emailList} >email to send</Button><br />
      <div>

        <FormControl className={classes.formControl}>
          <InputLabel className={textFeild1.root} id="demo-controlled-open-select-label"
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
          >question's kind</InputLabel>
          <Select

            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={kind}
            onChange={handleChange}
          >

            <MenuItem value={10}>open question</MenuItem>
            <MenuItem value={20}>region</MenuItem>
            <MenuItem value={30}>one selected</MenuItem>
            <MenuItem value={40}>multy selected</MenuItem>
          </Select>
        </FormControl>
      </div>
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
        className={textFeild1.root}
        label="enter a question"
      />
      <Fab
        variant="extended"
        size="medium"
        color="secondary"
        aria-label="add"
        // className={classes.margin}
        className={button1.root}
      >
        <AddIcon className={classes.extendedIcon} />
           add question
        </Fab>
      {/* 
      <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
        < />
      </Fab> */}


      <div style={{ display: showEmailList ? 'none' : 'block' }}> </div>
    </div>
    {/* <FullListEmail/> */}
    <FormToDesign />


    {(kind == 20) && <Region />}
    {(kind == 40 || kind == 30) && <CheckboxLabels />}
  </div>)

}
export default NewForm;
