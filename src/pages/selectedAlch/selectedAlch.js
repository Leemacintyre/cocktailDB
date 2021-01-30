import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './cocktailList.module.scss';

import CocktailCard from '../../components/cocktailCard/cocktailCard';
import { SearchField } from '../../components/searchField/searchField';

export const SelectedAlch = () => {
	const dispatch = useDispatch();
	const selectedUrl = useSelector((state) => state.alchTypeUrl);

	const [drinkData, setDrinkData] = useState([]);
	const [newDrinks, setNewDrinks] = useState([]);
	const [searchField, setSearchField] = useState('');

	let newUrl = searchField.charAt(0);

	const urlholder =
		'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b';

	let url = selectedUrl;
	console.log(selectedUrl + 'look herre');
	useEffect(() => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedUrl}`
			)
			.then((response) => {
				const { data } = response;
				const { drinks } = data;
				setDrinkData(drinks);
				console.log(response);
				const newDrinks = drinks.map((item) => {
					const { idDrink, strDrink, strDrinkThumb } = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
					};
				});
				setNewDrinks(newDrinks);
			});
	}, [selectedUrl]);

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
							/>
						)
				)}
			</div>
		</div>
	);
};
