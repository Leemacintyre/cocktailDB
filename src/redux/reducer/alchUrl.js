import { alchType } from '../actions';

export const alchTypeUrl = (state = 'Vodka', action) => {
	switch (action.type) {
		case 'ALCHTYPE':
			return action.payload;

		default:
			return state;
	}
};

export default alchTypeUrl;
