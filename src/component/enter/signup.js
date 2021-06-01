import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { signupApi } from '../api/signupApi'

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flagPassword, setFlagPassword] = useState(false);
    const [flagEmail, setFlagEmail] = useState(false);
    const [flagName, setFlagName] = useState(false);
    const [emailMass, setEmailMass] = useState('');
    const [passwordMass, setPasswordMass] = useState('');
    const [nameMass, setNameMass] = useState('');
    const [hasErrror, setHasErrror] = useState(true);

    const history = useHistory();
    
    let user = {
        email:email,
        password: password,
       name:name
        };
    const login = () => {
        signupApi(user)
        history.push('/');
    }

    useEffect(() => {
        if (email !== "" & name !== "" & password !== "" & !flagPassword & !flagEmail)
            setHasErrror(false)
        else
            setHasErrror(true)
    }, [email, name, password]);

    // useEffect(() => {
    //     setFlagEmail(isEmail(email))
    // }, [email]);

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    const classes = useStyles();

    function isEmail(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val))
            return true;
        return false;
    }

    function func1(e) {
        setEmail(e.target.value)
        setFlagEmail(isEmail(e.target.value))
        console.log('email from func 1 ' + e.target.value)
        console.log('email from func 2' + email)
        if (!flagEmail)
            setEmailMass("")

    }

    return (
        <div>
            <h1>wellcom</h1>
            <h3>we happy you choose to use ower sekerGraph </h3>
            <form className={classes.root} noValidate autoComplete="off">

                <div>
                    <TextField
                        onChange={(e) => { func1(e) }}
                        error={flagEmail}
                        id="standard-error-helper-text"
                        label="enter your Email*"
                        onBlur={() => {
                            if (flagEmail)
                                setEmailMass("email is not valid")
                        }}
                        helperText={emailMass}

                    />
                </div>

                <div>
                    <TextField
                        error={flagPassword}
                        id="standard-error-helper-text"
                        label="enter your password*"
                        onChange={(e) => {
                            setPassword(e.target.value)
                            console.log("password", password)
                            if (password.length + 1 >= 8) {
                                setPasswordMass("");
                                setFlagPassword(false);
                            }
                        }}
                        type="password"
                        helperText={passwordMass}
                        onBlur={() => {
                            if (password.length < 8) {
                                setPasswordMass("must be at least 8 chars");
                                setFlagPassword(true);
                            } console.log('passwordMass', passwordMass)
                        }}
                    />
                </div>

                <div>
                    <TextField
                        error={flagName}
                        id="standard-error-helper-text"
                        label="enter your name*"
                        onChange={(e) => {
                            setName(e.target.value);
                            if (name !== "") {
                                setNameMass("");
                                setFlagName(false);
                            }
                        }}
                        helperText={nameMass}
                        onBlur={() => {
                            if (name === "") {
                                setNameMass("must be full");
                                setFlagName(true)
                            }
                        }}

                    />
                </div>
                <Button disabled={hasErrror} variant="contained" color="secondary" onClick={login}>Registration</Button>
            </form>
        </div>
    )
}
export default Signup;