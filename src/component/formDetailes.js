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

    const sendBy=()=>{

    }
    const showEmails=()=>{

    }
    return <div>
        <Button variant="contained" color="secondary" onClick={newForm}>re-edit</Button>
        <Button variant="contained" color="secondary" onClick={sendBy}>send</Button>
        <Button variant="contained" color="secondary" onClick={showEmails}>emailes</Button>
        <Button variant="contained" color="secondary" onClick={results}>view results</Button>
        <button >send new</button>
        <button>choose when to send </button>
        <div>email list</div>
    </div>
}
export default FormDetailes