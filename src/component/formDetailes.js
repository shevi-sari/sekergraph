import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
function FormDetailes() {
    const history = useHistory();
    const newForm = () => {

        history.push('/newForm')
    }
    const results = () => {

        history.push('/results')
    }

    return <div>
        <Button variant="contained" color="secondary" onClick={newForm}>re-edit</Button>
        <Button variant="contained" color="secondary" >send</Button>
        <Button variant="contained" color="secondary" >emailes</Button>
        <Button variant="contained" color="secondary" onClick={results}>view results</Button>
    </div>
}
export default FormDetailes