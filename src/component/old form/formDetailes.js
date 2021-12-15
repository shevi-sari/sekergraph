
import React from 'react';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import FormToDesign from './../new form/formToDesign';
// import { useHistory } from "react-router-dom";
// import { Button } from '@material-ui/core';
import DateAndTimePickers from './sendIn';
import EmailList from './emailList';
import { useSelector } from 'react-redux';
import Menu from '../enter/menu';
import Results from './../enter/results';
import './formDetailes.css'
function FormDetailes() {
  //const [value, setValue] = React.useState('emailes');
  const [value, setValue] = React.useState(2)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [showTiming, setShowTiming] = useState(true);
  // const [showEmailList, setShowEmailList] = useState(true);
  // const history = useHistory();
  const form = useSelector(state => state.form.form);


  // const sendBy = () => {

  //   setShowTiming(false)
  // }
  // const showEmails = () => {
  //   setShowEmailList(!showEmailList)
  // }


  return (<div>
    <Menu />
    <img src="_b1.png" className='img' no-repeat="true" alt={"_b1.png"} />
    <Box className={'box'}sx={{ width: '100%', typography: 'body1',alignItems:'center' ,paddingLeft:'20rem'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="re-edit" value="2" />
            <Tab label="emails" value="1" />
            <Tab label="send" value="3" />
            <Tab label="view result" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4"></TabPanel>
      </TabContext>
    </Box>

    <div style={{ display: value === "1" ? 'block' : 'none' }}> <EmailList /></div>
    <div style={{ display: value === "3" ? 'block' : 'none' }}> <DateAndTimePickers /></div>
    <div style={{ display: value === "2" ? 'block' : 'none' }}> <FormToDesign /> </div>
    <div style={{ display: value === "4" ? 'block' : 'none' }}> <Results formId={form._id} /> </div>
  </div>
  )
}
export default FormDetailes;

