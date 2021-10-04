import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByManeger, removeEmail } from '../api/formApi';
import Fab from '@material-ui/core/Fab';
import { useSelector, useDispatch } from 'react-redux';
import { saveEmails } from '../../redux/actions/formAction'

function FullListEmail(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const classes = useStyles();
    const [emails, SetEmails] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [emailToRemove, SetEmailToRemove] = useState('');

    
    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        let num = (emails.indexOf(emailToRemove))
        emails.splice(num, 1);
        dispatch(saveEmails(emails));
    }, [emailToRemove]);

    useEffect(async () => {
        SetEmails(user.emails
            );
        dispatch(saveEmails(user.emails));
        printList();
    }, []);

    const add = () => {
        setShowInput(!showInput);
    }
    function isNotEmail(email) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (!regEmail.test(email))
    }

    const blur = (e) => {
        if (isNotEmail(e)) alert('email: ' + e + ' is not valid');
        else {
            emails.push(e);
            setShowInput(!showInput);
            dispatch(saveEmails(emails));
        }
    }
    const printList = () => {
        return emails.map((email) => <div><br />
            <Grid container className={classes.root}
            >
                <Grid item xs={8}>{email} <Fab size="small" color="secondary" aria-label="add" className={classes.margin}
                    onClick={() => {
                        SetEmailToRemove(email)
                    }}>
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
        <button onClick={add}>+</button>
        {showInput && <input onBlur={(e) => blur(e.target.value)} />}
    </div>
}
export default FullListEmail;