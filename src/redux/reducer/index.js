import cocktailReducer from './cocktailUrl';
import alchTypeReducer from './alchUrl';

import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
	cocktailUrl: cocktailReducer,
	alchTypeUrl: alchTypeReducer,
});
