import React from 'react';
import { useHistory } from 'react-router-dom';
import { saveForm } from '../../redux/actions/formAction';
import './formList.css';
import { useDispatch, useSelector } from 'react-redux';

function FormList(props) {

    const dispatch = useDispatch();
     const form = useSelector(state => state.form.form);

    const history = useHistory();

    const formDetailes =  (f) => {
         dispatch(saveForm(f));
        console.log('f^^^^^^^^^:', f._id);
        console.log("form:::::::::", form);
        history.push('/formDetailes');
        window.location.reload();
    }
    return props.list.map((f) => {
        return (<div className="">
            <div className="form" onClick={() => formDetailes(f)} >
                <p className="test">survey name : {f.name}</p>
                <p className="test">send in : {Date(f.date)}</p>
            </div></div>
        )
    })
}
export default FormList;

