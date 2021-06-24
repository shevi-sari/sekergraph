import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
function FullListEmail() {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
        },
    }));
    const classes = useStyles();
    const [emails, SetEmails] = useState(['s@s', 'v@v', 'j@j', 'g@g', 'fg@fg', 't@w', 'l@lll'])


    const removeEmailFromList = (e) => {
        let num = (emails.indexOf(e))
        let l = emails.splice(num, 0);
        SetEmails(l)
    }

    const printList = () => {
        return emails.map((email) => <div>
            <Grid container className={classes.root} >
                <Grid item xs={8}>{email} <DeleteIcon
                 //onClick={ select={removeEmailFromList}}
                />
                </Grid>
            </Grid>
        </div>)
    }

    return <div >
        {printList()}
    </div>
}
export default FullListEmail;