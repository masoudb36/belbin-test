import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	LinearProgress,
	Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import React, { useContext } from 'react';
import DetailsRoles from '../components/DetailsRoles';
import { AnswerContext } from '../contexts/AnswerContext';
import { useStyles } from '../styles/ResultStyle';
import { roles } from '../utils/TeamRoleDB';

const resultMap = {
	coordinator: [4, 6, 2, 1, 7, 4, 3],
	searching: [0, 8, 3, 5, 6, 2, 4],
	Sponsor: [1, 2, 6, 0, 5, 8, 1],
	Joya: [7, 3, 0, 4, 2, 5, 8],
	Evaluator: [6, 1, 5, 7, 0, 3, 6],
	Expert: [5, 7, 4, 8, 1, 0, 2],
	shaper: [8, 5, 7, 2, 8, 6, 0],
	Executor: [2, 0, 8, 3, 4, 1, 7],
	Finisher: [3, 4, 1, 6, 3, 7, 5],
};

const getRoles = (name) => {
	return roles.map((role) => role.imgName === name && role.name);
};

const getRoleDescription = (name) => {
	return roles.filter((role) => role.imgName === name)[0];
};

function getAnswers(answers) {
	return Object.keys(resultMap)
		.reduce((acc, curr) => {
			acc.push({
				name: curr,
				score: resultMap[curr].reduce(
					(accumulator, current, idx) =>
						accumulator + answers[idx].pointsAwarded[current],
					0
				),
			});
			return acc;
		}, [])
		.sort((a, b) => b.score - a.score);
}

const Result = () => {
	const classes = useStyles();
	const answers = useContext(AnswerContext);
	const scores = getAnswers(answers);
	return (
		<div className={classes.root}>
			<h3>جواب آزمون</h3>
			<div>
				{scores &&
					scores.map(({ name, score }) => (
						<Accordion className={classes.expansionPanel} key={name}>
							<AccordionSummary
								className={classes.expansionPanelSummary}
								expandIcon={<ExpandMoreIcon />}>
								<Typography className={classes.barName}>
									{getRoles(name)}
								</Typography>
								<div className={classes.progressBarWrapper}>
									<LinearProgress
										className={classes.progressBar}
										variant='determinate'
										value={((score / 80) * 100).toPrecision(4)}
									/>
								</div>
								<Typography>{(score / 80) * 100}%</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<DetailsRoles role={getRoleDescription(name)} />
							</AccordionDetails>
						</Accordion>
					))}
			</div>
		</div>
	);
};

export default Result;
