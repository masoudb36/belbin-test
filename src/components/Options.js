import {
	Button,
	Divider,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Counter from './Counter';
import { AnswerContext, AnswerChangeContext } from '../contexts/AnswerContext';

const useStyles = makeStyles((theme) => ({
	root: { display: 'flex', flexDirection: 'column' },

	item: {
		padding: theme.spacing(0.5, 2),
		margin: theme.spacing(1.5, 1),
		backgroundColor: '#f8f9fa',
		borderRadius: theme.spacing(1),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		fontSize: 15,
	},
	scoreBox: {
		width: 140,
		height: 60,
		padding: theme.spacing(1, 2),
		textAlign: 'center',
		fontSize: 15,
		backgroundColor: '#c0f6ff',
		alignSelf: 'flex-end',
		marginLeft: theme.spacing(1),
	},
	saveBtn: {
		backgroundColor: '#3c9',
		color: '#fff',
		alignSelf: 'center',
		marginTop: theme.spacing(2),
	},
}));

const Options = (props) => {
	const classes = useStyles();
	const answers = useContext(AnswerContext);
	const setAnswer = useContext(AnswerChangeContext);
	const { statement, options, numSection, changeSection } = props;

	const [pointsLeft, setPointsLeft] = useState(answers[numSection].pointsLeft);

	const changePoints = (index, point, pointsLeft) => {
		setPointsLeft(pointsLeft);
		answers[numSection].pointsAwarded[index] = point;
	};

	const saveAnswer = () => {
		if (pointsLeft === 0) {
			answers[numSection].pointsLeft = pointsLeft;
			setAnswer(answers);
			changeSection();
		}
	};

	return (
		<div className={classes.root}>
			<Typography variant='h6'>
				{numSection + 1} ) {statement}
			</Typography>
			<Paper className={classes.scoreBox} variant='outlined'>
				<Typography variant='body1'>
					امتیاز باقی مانده این صفحه:{pointsLeft}
				</Typography>
			</Paper>
			<div className={classes.content}>
				{options.map((option, index) => (
					<Paper key={index} variant='outlined' className={classes.item}>
						<Typography className={classes.text} variant='body1'>
							{option}
						</Typography>
						<Counter
							index={index}
							value={answers[numSection].pointsAwarded[index]}
							pointsLeft={pointsLeft}
							changePoints={changePoints}
						/>
					</Paper>
				))}
			</div>
			<Divider />
			<Button
				className={classes.saveBtn}
				variant='contained'
				onClick={saveAnswer}>
				ثبت پاسخ
			</Button>
		</div>
	);
};

export default Options;
