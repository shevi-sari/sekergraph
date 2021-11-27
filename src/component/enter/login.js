import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { loginApi } from '../api/loginApi.js';
import { textFeild, button } from '../../style';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import { initialState } from '../../redux/actions/userActions';
// import Alert from '@mui/material/Alert';

import "./login.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(true);
    // const [showConnectMass, setShowConnectMass] = useState(false);
    const dispatch = useDispatch();
    // const [disabled, setDisabled] = React.useState(true);
    useEffect(() => {

        dispatch(initialState())
    }, []);
    useEffect(() => {
        if (email !== "" & password !== "")
            setHasError(false)
        else
            setHasError(true)
    }, [email, password]);

    const history = useHistory({forceRefresh:true});
    const buttonStyle = button();

    const signup = () => {
        history.push('/signup');
        window.location.reload();
    }
    const login_func = () => {

        loginApi(email, password)
            .then((data) => {
                console.log('data.user', data);
                if (data === 401) {
                    alert("שם משתמש או סיסמא אינם תקינים");
                    console.log("Status Code is:" + data);
                }
                else if(data){
                    dispatch(login(data))
                    history.push('/home');
                    
                }
            })

            .catch((error) => console.log("error from reload:", error))
    }

    const classes = textFeild();
    return (

        <div className="form1" >
            {/* <CustomizedDialogs style={{ color: 'black' }} /> */}
            <form noValidate autoComplete="off"><div>
           
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
                    className={classes.root}
                    label="enter your Email*"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} /><br />
                <TextField id="standard-basic"
                    className={classes.root}
                    type="password"
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

                    label="enter your password*"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />


                <br /><Button className={buttonStyle.root} variant="contained" onClick={signup}  >signup</Button>
                <br /><Button disabled={hasError} className={buttonStyle.root} variant="contained" onClick={login_func}  >enter</Button>
            </div>

            </form>

        </div>
    )
}
export default Login;


