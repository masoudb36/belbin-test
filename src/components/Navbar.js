import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	CssBaseline,
} from '@material-ui/core';
import {  Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from '../styles/NavbarStyle';
import clsx from 'clsx';
import Menu from './Menu';

function Navbar() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='sticky'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					
					<Typography
						noWrap
						variant='h6'
						color='inherit'
						className={classes.title}>
						تست بلبین
					</Typography>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						// eslint-disable-next-line react/jsx-no-duplicate-props
						className={clsx(open && classes.hide)}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Menu open={open} closeMenu={closeMenu} />
		</div>
	);
}

export default Navbar;
