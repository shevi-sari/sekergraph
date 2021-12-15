import React,{useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';


function Menu() {
  const history = useHistory();
  useEffect(() => {
    // setList(forms)
    //   console.log(list);
// debugger
    console.log('*******************');
    //dispatch(initialState())
}, []);
  return (<div>

    <Tooltip title="go to home" >
      <IconButton tooltip="home page" style={{ cursor: 'default', float: 'right', }}>
        <HomeIcon edge={'end'} style={{ color: 'white', cursor: 'default' }} onClick={() => { history.push('/home') }} />
      </IconButton></Tooltip>
  </div>)
}
export default Menu;

// import React from 'react';
// import Box from '@mui/material/Box';
// import SvgIcon from '@mui/material/SvgIcon';

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

// export default function SvgIconsSize() {
//   return (
//     <Box
//       sx={{
//         '& > :not(style)': {
//           m: 2,
//         },
//       }}
//     >
//       <HomeIcon fontSize="small" />
//       <HomeIcon />
//       <HomeIcon fontSize="large" />
//       <HomeIcon sx={{ fontSize: 40 }} />
//     </Box>
//   );
// }
