import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByManeger, removeEmail } from '../api/formApi'
function FullListEmail() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const classes = useStyles();
    const [emails, SetEmails] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [emailToRemove, SetEmailToRemove] = useState('');

    useEffect(async () => {
        const f = await getEmailByManeger()
        SetEmails(f)
        printList();
    }, []);

    useEffect(() => {
        let num = (emails.indexOf(emailToRemove))
        emails.splice(num, 1);
    }, [emailToRemove]);

    // const removeEmailFromList = (e) => {
    //     let num = (emails.indexOf(e))
    //     let l = emails.splice(num, 0);
    //     SetEmails(l)
    // }

    const add = () => {
        setShowInput(!showInput);
    }
    const blur = (e) => {
        emails.push(e);
        setShowInput(!showInput);
    }
    const printList = () => {
        return emails.map((email) => <div>
            <Grid container className={classes.root} >
                <Grid item xs={8}>{email} <DeleteIcon
                    onClick={()=> SetEmailToRemove(email)}
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
export default FullListEmail;