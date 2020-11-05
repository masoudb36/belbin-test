import React from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { useStyles } from './styles/AppStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import {AnswerProvider} from './contexts/AnswerContext';

function App() {
	const classes = useStyles();
	return (
		<AnswerProvider>
			<Router>
			<div className={classes.root}>
				<Navbar />
				<Routes />
			</div>
		</Router>
		</AnswerProvider>
	);
}

export default App;
