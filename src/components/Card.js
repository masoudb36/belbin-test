import { Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles/CardStyles';

const Card = (props) => {
	const classes = useStyles();
	const { name, imgName, description, strengths, weaknesses, surprise } = props;
	return (
		<Paper className={classes.root}>
			<div className={classes.header}>
				<h2>{name}</h2>
				<img src={`img/${imgName}.png`} alt='pic' />
			</div>
			<div className={classes.content}>
				<div className={classes.item}>
					<h4>{description}</h4>
				</div>
				<div className={classes.item}>
					<p>
						<span>نقاط قوت : </span>
						{strengths}
					</p>
				</div>
				<div className={classes.item}>
					<p>
						<span>نقاط ضعف قابل قبول : </span>
						{weaknesses}
					</p>
				</div>
				<div className={classes.item}>
					<p>
						<span>غافلگیر نشوید اگر دیدید : </span>
						{surprise}
					</p>
				</div>
			</div>
		</Paper>
	);
};

export default Card;
