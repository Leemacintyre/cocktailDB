import React from 'react';

export const SearchField = (props) => {
	const { handleSearchField } = props;
	return (
		<div>
			<input onChange={handleSearchField} />
		</div>
	);
};
