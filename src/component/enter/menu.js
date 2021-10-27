import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';

function Menu() {
    const history = useHistory();
  return (<div>
      <Tooltip title="go to home" >
       <IconButton tooltip="home page" style={{ cursor: 'default' ,float: 'right',}}>
          <MenuIcon edge={'end'} style={{color: 'white', cursor: 'default' }} onClick={() => { history.push('/home') }} />
        </IconButton></Tooltip>
  </div>)
}
export default Menu;
