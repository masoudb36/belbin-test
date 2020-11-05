import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Instructions from '../pages/Instructions';
import Quiz from '../pages/Quiz';
import TeamRole from './TeamRole';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/quiz' render={() => <Quiz />} />
			<Route exact path='/instructions' render={() => <Instructions />} />
			<Route exact path='/roles' render={() => <TeamRole />} />
		</Switch>
	);
};

export default Routes;
