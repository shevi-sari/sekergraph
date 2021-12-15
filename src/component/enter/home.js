import React from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList';
import { Button } from '@material-ui/core';
import './home.css'
import { button } from '../../style';
import {  useSelector } from 'react-redux';
// import { saveForm } from '../../redux/actions/formAction';
//import { initialForm } from '../../redux/actions/formAction';

function Home() {

    // const [list, setList] = useState('');
    // const dispatch = useDispatch();
   // const form = useSelector(state => state.form.form)

    const list = useSelector(state => state.user.user);
    // setList( useSelector(state => state.user.user))
    // useEffect(() => {
    //     // setList(forms)
    //     //   console.log(list);

    //     console.log('uuuuuser', list);
    //     //dispatch(initialState())
    // }, []);

    // const dispatch = useDispatch()
    const history = useHistory();
    const buttonStyle = button();

    const newForm = () => {
        //לאפס טופס
      //  dispatch(saveForm(null));
        history.push('/newForm');

    }


    return (<div className="homePage" >
        <img src="_b1.png" className='img' no-repeat="true" />
        <div>
            <div>you surveys</div>
            <div className="formList">
                {list && <FormList className="form" list={list} />}
            </div>

            <Button className={buttonStyle.root} variant="contained" onClick={newForm}  >new form</Button>
        </div>
    </div>
    )
}
export default Home;
