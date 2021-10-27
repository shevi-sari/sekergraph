import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { loginApi } from '../api/loginApi.js';
import { textFeild, button } from '../../style';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import { initialState } from '../../redux/actions/userActions';

import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import "./login.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(true);
    const [showConnectMass, setShowConnectMass] = useState(false);
    const dispatch = useDispatch();
    // const [disabled, setDisabled] = React.useState(true);
    useEffect(async () => {

        dispatch(initialState())
    }, []);
    useEffect(() => {
        if (email !== "" & password !== "")
            setHasError(false)
        else
            setHasError(true)
    }, [email, password]);

    const history = useHistory();
    const buttonStyle = button();

    const signup = () => {
        history.push('/signup');
        window.location.reload();
    }

    const login_func = () => {
        loginApi(email, password)
            .then((data) => {
                console.log('data.user', data);

                dispatch(login(data));

            }).then(() => {
                history.push('/home');
                // window.location.reload();
            }).catch((error) => console.log("error from reload:", error))
    }


    const classes = textFeild();
    return (

        <div className="form1" >
            <CustomizedDialogs style={{ color: 'black' }} />
            <form  noValidate autoComplete="off"><div>
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



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    // '& .MuiDialogContent-root': {
    //   padding: theme.spacing(2),
    // },
    // '& .MuiDialogActions-root': {
    //   padding: theme.spacing(1),
    // },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}