import { Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const DetailsRoles = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const {
		description,
		strengths,
		weaknesses,
		surprise,
    } = props.role;
    
	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				indicatorColor='primary'
				textColor='primary'
				onChange={handleChange}
				aria-label='example'>
				<Tab label='توضیحات' />
				<Tab label='نقاط قوت' />
				<Tab label='نقاط ضعف' />
				<Tab label='ویژگی ها' />
			</Tabs>

			<TabPanel value={value} index={0}>
				{description}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{strengths}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{weaknesses}
			</TabPanel>
			<TabPanel value={value} index={3}>
				{surprise}
			</TabPanel>
		</div>
	);
};

export default DetailsRoles;
