import React from 'react';
import styles from './searchField.module.scss';

export const SearchField = (props) => {
	const { handleSearchField } = props;
	return (
		<div className={styles.container}>
			<input placeholder='Choose a cocktail' onChange={handleSearchField} />
		</div>
	);
};
