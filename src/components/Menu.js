import React from 'react';

import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import {
	ChevronRight as ChevronRightIcon,
	Home as HomeIcon,
	Assignment as AssignmentIcon,
	AssignmentTurnedIn as AssignmentTurnedInIcon,
	AssignmentInd as AssignmentIndIcon,
} from '@material-ui/icons';

import { useStyles } from '../styles/NavbarStyle';
import { Link } from 'react-router-dom';

const Menu = ({ open, closeMenu }) => {
	const classes = useStyles();
	return (
		<div>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='right'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={closeMenu}>
						<ChevronRightIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<Link to='/' onClick={closeMenu}>
						<ListItem button style={{ textAlign: 'right' }}>
							<ListItemText>صفحه نخست</ListItemText>
							<ListItemIcon style={{ display: 'block' }}>
								<HomeIcon />
							</ListItemIcon>
						</ListItem>
					</Link>
					<Link to='/quiz' onClick={closeMenu}>
						<ListItem button style={{ textAlign: 'right' }}>
							<ListItemText>شروع آزمون</ListItemText>
							<ListItemIcon style={{ display: 'block' }}>
								<AssignmentTurnedInIcon />
							</ListItemIcon>
						</ListItem>
					</Link>
					<Link to='/instructions' onClick={closeMenu}>
						<ListItem button style={{ textAlign: 'right' }}>
							<ListItemText>دستورالعمل</ListItemText>
							<ListItemIcon style={{ display: 'block' }}>
								<AssignmentIcon />
							</ListItemIcon>
						</ListItem>
					</Link>
				</List>
				<Divider />
				<List>
					<Link to='/roles' onClick={closeMenu}>
						<ListItem style={{ textAlign: 'right' }}>
							<ListItemText>آشنایی با نقش ها</ListItemText>
							<ListItemIcon style={{ display: 'block' }}>
								<AssignmentIndIcon />
							</ListItemIcon>
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</div>
	);
};

export default Menu;
