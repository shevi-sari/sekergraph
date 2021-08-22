import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { getEmailByManeger, removeEmail } from '../api/formApi';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import { saveEmails} from '../../actions/formAction'

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

    useEffect(async () => {
       // const f = await getEmailByManeger()
       SetEmails(JSON.parse(sessionStorage.getItem('User')).user.emails)
        printList();
    }, []);

    useEffect(() => {
        let num = (emails.indexOf(emailToRemove))
        emails.splice(num, 1);
        props.saveEmails(JSON.stringify(emails));
    }, [emailToRemove]);
  
    // useEffect(() => {
    //     props.saveEmails(JSON.stringify(emails));
    // }, [emails]);

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
        props.saveEmails(JSON.stringify(emails));
    }
    const printList = () => {
        return emails.map((email) => <div><br/>
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
export default connect(null, { saveEmails})( FullListEmail);