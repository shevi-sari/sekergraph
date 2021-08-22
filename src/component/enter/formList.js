import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveForm } from '../../actions/formAction'
import './formList.css'

function FormList(props) {
    const { kind, theQuestion, answers } = props;
    //const { form } = props;
    //const mapStateToProps=()=>{return form:state.form;}
    const history = useHistory();
    const formDetailes = (f) => {
        props.saveForm(JSON.stringify(f));
        
        //sessionStorage.getItem('form', JSON.stringify(f));
        history.push('/formDetailes')
    }

    return props.list.map((f) => {
        return (<div className="form">
            <div className="" onClick={() => formDetailes(f)} >
                <labal >survey name :{f.name}</labal>
                <label >send in :{f.date}</label>
            </div></div>
        )
    })

}
// const mapStateToProps = (form) => {
//     return {
//         ...form
//     }
// }
export default connect(null, { saveForm })(FormList);

