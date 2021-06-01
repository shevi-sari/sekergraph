import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList'

function Home() {
  

   

    // const SetSelected=(s)=>{
    //     setSelectedSong(s);
    //   }

    const list=   [
        { formNum: 1 ,date:'25.03.2000'},
        { formNum: 2 ,date:'25.03.2000'},
        { formNum: 3, date:'25.03.2000'},
        { formNum: 4 ,date:'25.03.2000'},
        { formNum: 5 ,date:'25.03.2000'},
        { formNum: 6, date:'25.03.2000'},
        { formNum: 7 ,date:'25.03.2000'},
        { formNum: 8 ,date:'25.03.2000'},
        { formNum: 9, date:'25.03.2000'},
        { formNum: 10 ,date:'25.03.2000'},
        { formNum: 11 ,date:'25.03.2000'},
        { formNum: 12, date:'25.03.2000'},
        { formNum: 13 ,date:'25.03.2000'},
        { formNum: 14 ,date:'25.03.2000'},
        ]

    const history = useHistory();
    const newForm = () => {

        history.push('/newForm')
    }
   
    return (<div>
        <FormList list={list}></FormList>
        <button onClick={newForm}>new form</button>

    </div>)
}
export default Home;