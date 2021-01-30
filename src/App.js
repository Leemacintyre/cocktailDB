import React from 'react';
import './app.scss';
import { CocktailList } from './pages/cocktailList/cocktailList';
import { CocktailDetail } from './pages/cocktailDetail/cocktailDetail';
import { SelectedAlch } from './pages/selectedAlch/selectedAlch';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header';

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' render={(props) => <CocktailList {...props} />} />
				<Route
					exact
					path='/selectedalch'
					render={(props) => <SelectedAlch {...props} />}
				/>
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
