import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../assets/img/team.png';

import { useStyles } from '../styles/HomeStyle';

const Home = () => {
	const classes = useStyles();
	return (
		<main className={classes.root}>
			<Container>
				<Grid container justify='center' alignItems='center' spacing={2}>
					<Grid item sm={6} xs={12}>
						<img className={classes.headerImg} src={headerImg} alt='header' />
					</Grid>
					<Grid item sm={6} xs={12}>
						<Typography className={classes.text} variant='h6'>
							بلبین ابزاری مناسب در اختیار شما قرار می دهد تا تواناییهای خود را
							شکوفا کنید. اثربخشی خود در تیم را به حداکثر برسانید. به شما کمک می
							کند نقش های تیمی لازم برای موفقیت بیشتر در یک شغل خاص را شناسایی
							کنید و آنها را در خود تقویت نمایید.
						</Typography>
					</Grid>
					<Grid item>
						<Link className={classes.headerButton} to='quiz'>
							<Button
								variant='contained'
								color='secondary'>
								شروع آزمون
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default Home;
