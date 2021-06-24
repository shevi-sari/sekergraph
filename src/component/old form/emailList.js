import React, {useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByForm, addEmail} from '../api/formApi'
import { Button } from '@material-ui/core';
function EmailList() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const [emails,SetEmails] =useState ([])
    const [emailToRemove,SetEmailToRemove] =useState ('');
    const [showInput,setShowInput] =useState ('');


    useEffect(async() => {
        const f=await getEmailByForm()
        SetEmails(f)
        
    },[showInput]);

   
    // useEffect(async() => {
    //     let num = (emails.indexOf(emailToRemove))
    //     let l = emails.splice(num, 0);
    //     SetEmails (l)
        
    // },[emailToRemove]);
    const removeEmailFromList = (e) => {
        
       let num = (emails.indexOf(e))
        let l = emails.splice(num, 0);
        SetEmails (l) 
    }

    const add=()=>{
        setShowInput(true)
    }
    const blur=(e)=>{
        addEmail(e);
        setShowInput(false);
        printList();
        
    }
    const classes = useStyles();


    const printList = () => {
        return emails?.map((email) => <div>
            <Grid container className={classes.root} >
                <Grid item xs={8}>{email} <DeleteIcon
                  onClick={removeEmailFromList}
                  />
                </Grid>
            </Grid>

        </div>)
    }



    return <div >
        {printList()}
        <button onClick={add}>+</button>
       {showInput && <input onBlur={(e)=>blur(e.target.value)}/>}
    </div>
}
export default EmailList;
// ,setShowInput(false)