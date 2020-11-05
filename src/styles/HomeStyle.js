import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
        display:'flex',
        alignItems:'center',
        
		backgroundColor: theme.palette.common.white,
        // overflow: 'hidden',
        flexGrow: 1,
        padding: theme.spacing(3),
        overflowX:'hidden',
        
	},
	headerImg: {
		width: '100%',
    },
    text:{
        direction:'rtl',
        textAlign:'right',
        padding:theme.spacing(3),
        boxShadow:theme.shadows[2]
    },
    headerButton:{
        textAlign:'center',
        textDecoration:'none',
    }
}));
