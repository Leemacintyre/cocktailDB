const cocktailUrl = (
	state = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
	action
) => {
	switch (action.type) {
		case 'VODKA':
			return 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka';

		default:
			return state;
	}
};

export default cocktailUrl;
