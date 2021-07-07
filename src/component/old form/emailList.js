import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByForm, addEmail, removeEmail } from '../api/formApi'
import { Button } from '@material-ui/core';
function EmailList() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const [emails, SetEmails] = useState([])
    const [emailToRemove, SetEmailToRemove] = useState('');
    const [showInput, setShowInput] = useState(false);


    useEffect(async () => {
        const f = await getEmailByForm()
        SetEmails(f)
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
        addEmail(e).then(res => {
            SetEmails(res);
            setShowInput(!showInput);
        });
    }
    const classes = useStyles();

    const printList = () => {
        return emails?.map((email) =>
            <div> <Grid container className={classes.root} >
                <Grid item xs={8}>{email} <DeleteIcon
                    onClick={() => SetEmailToRemove(email)}
                />
                </Grid>
            </Grid>
            </div>)
    }

    return <div >
        {printList()}
        <button onClick={add}>+</button>
        {showInput && <input onBlur={(e) => blur(e.target.value)} />}

    </div>
}
export default EmailList;
// ,setShowInput(false)