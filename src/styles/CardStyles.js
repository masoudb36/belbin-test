import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		direction: 'rtl',
		borderRadius: theme.spacing(2),
		height: 400,
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#4bd9e8',
		padding: theme.spacing(0, 2),
		borderTopLeftRadius: theme.spacing(2),
		borderTopRightRadius: theme.spacing(2),
		
	},
	content: {
		padding: theme.spacing(2),
		fontSize: theme.spacing(2),
		fontWeight: '300',
    },
    item:{
       '& span':{
           color:'#048012',
           fontWeight: 'bold',
	   },
	  
    }
}));
