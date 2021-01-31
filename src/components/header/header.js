import React from 'react';
import styles from './header.module.scss';
import { NavBar } from '../DropdownNavbar/navBar';

export const Header = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<p>CocktailDB</p>
		</div>
	);
};
