import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducers } from './redux/reducer';

import './index.scss';

const history = createBrowserHistory();
const store = createStore(
	rootReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router history={history}>
				<App className='indexContainer' />
			</Router>
		</React.StrictMode>
	</Provider>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
