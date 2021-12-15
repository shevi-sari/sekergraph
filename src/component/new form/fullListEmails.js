import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
// import { getEmailByManeger, removeEmail } from '../api/formApi';
import Fab from '@material-ui/core/Fab';
import { useSelector, useDispatch } from 'react-redux';
import { saveEmails } from '../../redux/actions/formAction'
import AddIcon from '@material-ui/icons/Add';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextField from '@material-ui/core/TextField';
import { textFeild } from '../../style';
import './fullListEmails.css'
function FullListEmail() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));

    const classes = useStyles();
    const [emailList, SetEmailList] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [emailToRemove, SetEmailToRemove] = useState('');


    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {

if(user){
        SetEmailList(user.emails);
        dispatch(saveEmails(user.emails));}

    }, [user]);
    useEffect(() => {

        let num = (emailList.indexOf(emailToRemove))
        // emailList.splice(num, 1);
        //    SetemailList(e)
        dispatch(saveEmails(emailList.splice(num, 1)));
    }, [emailToRemove]);

    // useEffect( () => {
    //     SetEmailList(user.emails );
    //     dispatch(saveEmails(user.emails));

    // }, []);
  
    const classes1 = textFeild();
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
            emailList.push(e);
            setShowInput(!showInput);
            dispatch(saveEmails(emailList));
        }
    }


    return <div className='emailList' >

        {emailList && emailList.map((email) => {
            return (<div className='carrentEmail'>
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
            </div>
            )
        })}
        {showInput && <TextField onBlur={(e) => blur(e.target.value)} className={classes1.TextField} />}
        <AddIcon onClick={add}></AddIcon>

    </div>
}
export default FullListEmail;
