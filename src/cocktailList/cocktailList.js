import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './cocktailList.module.scss';

import CocktailCard from '../cocktailCard/cocktailCard';
import { SearchField } from '../searchField/searchField';

export const CocktailList = () => {
	const [drinkData, setDrinkData] = useState([]);
	const [newDrinks, setNewDrinks] = useState([]);
	const [searchField, setSearchField] = useState('a');

	let newUrl = searchField.charAt(0);

	const urlholder =
		'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b';

	let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${newUrl}`;

	useEffect(() => {
		axios.get(url).then((response) => {
			const { data } = response;
			const { drinks } = data;
			setDrinkData(drinks);
			console.log(drinks);
			const newDrinks = drinks.map((item) => {
				const {
					idDrink,
					strDrink,
					strDrinkThumb,
					strAlcoholic,
					strIngredient1,
				} = item;
				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
					info: strAlcoholic,
					mainAlch: strIngredient1,
				};
			});
			setNewDrinks(newDrinks);
		});
	}, [newUrl]);

	const handleSearchField = (event) => {
		setSearchField(event.target.value);
		if (event.target.value.length === 0) {
			setSearchField('a');
		}
	};
	console.log(searchField);

	return (
		<div className={styles.container}>
			<SearchField handleSearchField={handleSearchField} />
			<div className={styles.cocktailCard}>
				{newDrinks.map(
					(item, i) =>
						item.name.toUpperCase().includes(searchField.toUpperCase()) && (
							<CocktailCard
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
								info={item.info}
								mainAlch={item.mainAlch}
							/>
						)
				)}
			</div>
		</div>
	);
};
