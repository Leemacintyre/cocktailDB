import React from 'react';
import './app.scss';
import { CocktailList } from './cocktailList/cocktailList';
import { CocktailDetail } from './cocktailDetail/cocktailDetail';
import { Switch, Route } from 'react-router-dom';
import { Header } from './header/header';

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' render={(props) => <CocktailList {...props} />} />
				<Route
					exact
					path='/:id'
					render={(props) => <CocktailDetail {...props} />}
				/>
			</Switch>
		</>
	);
};

export default App;
