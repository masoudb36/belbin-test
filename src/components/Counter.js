import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';
import { green, red } from '@material-ui/core/colors';
import React, { useState } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 120,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	removeBtn: {
		color: red[500],
	},
	disableBtn: {
		color: red[100],
	},
	addBtn: {
		color: green[500],
	},
	disableAddBtn: {
		color: green[100],
	},
}));

const Counter = ({ pointsLeft, changePoints, value, index }) => {
	const classes = useStyles();
	const [point, setPoint] = useState(value);

	const addPoint = () => {
		if (point < 10) {
			setPoint(point + 1);
			changePoints(index, point + 1, pointsLeft - 1);
		}
	};
	const subPoint = () => {
		if (point > 0) {
			setPoint(point - 1);
			changePoints(index, point - 1, pointsLeft + 1);
		}
	};

	const disableRemoveIcon = point === 0 && true;
	const disableAddIcon = pointsLeft === 0 && true;

	return (
		<div className={classes.root}>
			<IconButton disabled={disableAddIcon} onClick={addPoint}>
				<AddIcon
					className={clsx(classes.addBtn, {
						[classes.disableAddBtn]: disableAddIcon,
					})}
				/>
			</IconButton>
			<Typography variant='caption'>{point}</Typography>
			<IconButton disabled={disableRemoveIcon} onClick={subPoint}>
				<RemoveIcon
					className={clsx(classes.removeBtn, {
						[classes.disableBtn]: disableRemoveIcon,
					})}
				/>
			</IconButton>
		</div>
	);
};

export default Counter;
