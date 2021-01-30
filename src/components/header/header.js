import React from 'react';
import styles from './header.module.scss';
import { NavBar } from '../navBar/navBar';

export const Header = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<p>CocktailDB</p>
		</div>
	);
};
