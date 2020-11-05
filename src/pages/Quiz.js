import React, { useState } from 'react';
import { questions } from '../utils/QuestionsDB';
import Options from '../components/Options';
import { Container, makeStyles, Paper } from '@material-ui/core';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
	root: {
		direction: 'rtl',
		backgroundColor: '#fff',
		padding: theme.spacing(6, 0),
	},
	content: {
		padding: theme.spacing(3),
	},
}));

const Quiz = () => {
	const classes = useStyles();
	const [numSection, setNumSection] = useState(0);

	const changeSection = () => {
		setNumSection(numSection + 1);
	};
	return (
		<div className={classes.root}>
			<Container>
				<Paper className={classes.content}>
					{numSection === 7 ? (
						<Result />
					) : (
						<Options
							key={numSection}
							{...questions[numSection]}
							numSection={numSection}
							changeSection={changeSection}
						/>
					)}
				</Paper>
			</Container>
		</div>
	);
};

export default Quiz;
