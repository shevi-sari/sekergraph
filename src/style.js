import { makeStyles, withStyles } from '@material-ui/core/styles';

export const textFeild = makeStyles((theme) => ({
    root: {
        
        '& label.Mui-focused': {
            color: 'white',
        }, '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },


        }
    }
}));

export const button = makeStyles((theme) => ({
    root: {
        background: '#e06c79',
        color: 'white',
        'border-radius': '1.5625rem',
        'font-size': '1rem',
         padding: '0.5rem 5.25rem',
        margin: '2rem'
    }
    // root: {
    //     '& label.Mui-focused': {
    //         color: 'white',
    //     }, '& label.Mui-focused': {
    //         color: 'white',
    //     },
    //     '& .MuiInput-underline:after': {
    //         borderBottomColor: 'white',
    //     },
    //     '& .MuiInput-underline:before': {
    //         borderBottomColor: 'white',
    //     },
    //     '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //             borderColor: 'white',
    //         },
    //         '&:hover fieldset': {
    //             borderColor: 'white',
    //         },
    //         '&.Mui-focused fieldset': {
    //             borderColor: 'white',
    //         },


    // }
    // }
}));


