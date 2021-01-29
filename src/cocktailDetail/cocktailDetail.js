import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './cocktailDetail.module.scss';

export const CocktailDetail = (props) => {
	const { match } = props;
	const { params } = match;
	const { id } = params;

	const [drinkData, setDrinkData] = useState(undefined);

	useEffect(() => {
		axios
			.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((response) => {
				const { data } = response;
				const { drinks } = data;
				setDrinkData(drinks);
				// console.log(drinks);
			});
	}, [id]);

	const drinkDetail = () => {
		const {
			strDrink,
			strDrinkThumb,
			strGlass,
			strInstructions,
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
			strIngredient6,
			strIngredient7,
			strIngredient8,
			strIngredient9,
			strIngredient10,
			strIngredient11,
			strIngredient12,
			strMeasure1,
			strMeasure2,
			strMeasure3,
			strMeasure4,
			strMeasure5,
			strMeasure6,
			strMeasure7,
			strMeasure8,
			strMeasure9,
			strMeasure10,
			strMeasure11,
			strMeasure12,
		} = drinkData[0];

		return (
			<div className={styles.container}>
				<p className={styles.title}>{strDrink}</p>
				<div className={styles.imageContainer}>
					<img className={styles.image} src={strDrinkThumb} alt='type'></img>
				</div>
				<div className={styles.glassContainer}>
					<p className={styles.glassName}>Glass</p>
					<p className={styles.glassType}>{strGlass}</p>
				</div>
				<div className={styles.ingredientList}>
					<div className={styles.ingredientsTitle}>
						<p>Ingredients:</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient1}</p>
						<p className={styles.measure}>{strMeasure1}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient2}</p>
						<p className={styles.measure}>{strMeasure2}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient3}</p>
						<p className={styles.measure}>{strMeasure3}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient4}</p>
						<p className={styles.measure}>{strMeasure4}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient5}</p>
						<p className={styles.measure}>{strMeasure5}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient6}</p>
						<p className={styles.measure}>{strMeasure6}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient7}</p>
						<p className={styles.measure}>{strMeasure7}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient8}</p>
						<p className={styles.measure}>{strMeasure8}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient9}</p>
						<p className={styles.measure}>{strMeasure9}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient10}</p>
						<p className={styles.measure}>{strMeasure10}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient11}</p>
						<p className={styles.measure}>{strMeasure11}</p>
					</div>
					<div className={styles.ingredientContainer}>
						<p className={styles.ingredient}>{strIngredient12}</p>
						<p className={styles.measure}>{strMeasure12}</p>
					</div>
				</div>
				<div className={styles.instructionsContainer}>
					<p className={styles.instructionsTitle}>How to Make:</p>
					<p className={styles.instructions}>{strInstructions}</p>
				</div>
				<Link className={styles.return} to='/'>
					Return
				</Link>
			</div>
		);
	};

	return (
		<>
			{drinkData === undefined && 'LOADING...'}
			{drinkData !== undefined && drinkData && drinkDetail()}
			{drinkData === false && 'drink not found'}
		</>
	);
};
