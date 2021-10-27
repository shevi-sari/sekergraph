import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByForm, addEmail, removeEmail } from '../api/formApi'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';

function EmailList() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const formEmails = useSelector(state => state.form.form.emails);
    const [emails, SetEmails] = useState(formEmails)
    const [emailToRemove, SetEmailToRemove] = useState('');
    const [showInput, setShowInput] = useState(false);

    const form = useSelector(state => state.form.form);
   

    // useEffect(() => {
    //     removeEmail(emailToRemove, form).then(res => {
    //         SetEmails(res);
    //     });
    // }, [emailToRemove]);

    useEffect(async () => {
        console.log("formooooooooooofl:", formEmails);
        SetEmails(formEmails)
        console.log("formoooooooooooflgggggjjjj:", emails);
        printList();
    }, []);

    const add = () => {
        setShowInput(!showInput);
    }
    const blur = (e) => {
        addEmail(e, form).then(res => {
            SetEmails(res);
            setShowInput(!showInput);
        });
    }
    const classes = useStyles();

    const printList = () => {
        return emails?.map((email) =>
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