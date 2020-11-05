import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { roles } from '../utils/TeamRoleDB';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'grid',
		// gridTemplateColumns: 'repeat(3,minmax(240px,min-content))',
		// gridGap: '20px',
		// justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		color: theme.palette.secondary.dark,
		margin: theme.spacing(2,0),
	},
}));

const TeamRole = () => {
	const classes = useStyles();
	return (
		<Container>
			<Typography variant='h4' className={classes.title}>
				آشنایی با نقش ها
			</Typography>
			<Grid container spacing={3}>
				{roles.map((role) => (
					<Grid item xs={12} sm={6} md={4}>
						<Card {...role} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default TeamRole;
