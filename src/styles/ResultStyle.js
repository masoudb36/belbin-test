import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: '0 auto',
		marginTop: '100px',
		maxWidth: '960px',
		textAlign: 'center',
		'& h3': {
			fontWeight: 300,
			fontSize: '44px',
			margin: '50px',
		},
	},
	progressBarWrapper: {
		width: '25%',
		display: 'flex',
		margin: '0 20px',
		alignItems: 'center',
		'& div': {
			width: '100%',
		},
	},
	expansionPanel: {
		textAlign: 'initial',
	},
	expansionPanelSummary: {
		display: 'flex',
	},
	barName: {
		flexBasis: '33.3%',
	},
}));
