import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByForm, addEmail, removeEmail } from '../api/formApi'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {  useDispatch, useSelector } from 'react-redux';

function EmailList() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const [emails, SetEmails] = useState([])
    const [emailToRemove, SetEmailToRemove] = useState('');
    const [showInput, setShowInput] = useState(false);

    const form = useSelector(state => state.form);
    const formEmails = useSelector(state => state.form.emails);
    
    useEffect(async () => {
        console.log("formooooooooooo:",form);
        SetEmails(formEmails)
        printList();
    }, []);


    useEffect(() => {
        removeEmail(emailToRemove).then(res => {
            SetEmails(res);
        }
        );

    }, [emailToRemove]);


    const add = () => {
        setShowInput(!showInput);
    }
    const blur = (e) => {
        addEmail(e,form).then(res => {
            SetEmails(res);
            setShowInput(!showInput);
        });
    }
    const classes = useStyles();

    const printList = () => {
        return form.emails?.map((email) =>
            <div> <Grid container className={classes.root} >
                <Grid item xs={8}>{email} <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                            <DeleteIcon
                                onClick={() => {
                                    SetEmailToRemove(email)
                                        
                                }}
                            />
                        </Fab>
                </Grid>
            </Grid>

            
            </div>)
    }

    return <div >
        {printList()}
        
        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={add}>
          <AddIcon />
        </Fab>
        {showInput && <input onBlur={(e) => blur(e.target.value)} />}

    </div>
}
export default EmailList;
// ,setShowInput(false)