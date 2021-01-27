import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
			strMeasure1,
			strMeasure2,
			strMeasure3,
			strMeasure4,
			strMeasure5,
			strMeasure6,
		} = drinkData[0];

		// console.log(strDrink);

		return (
			<div>
				<h1>{strDrink}</h1>
				<img src={strDrinkThumb} alt='type' style={{ width: '100px' }}></img>
				<h1>{strGlass}</h1>
				<div>
					<div>
						<h3>{strIngredient1}</h3>
						<h3>{strMeasure1}</h3>
					</div>
					<div>
						<h3>{strIngredient2}</h3>
						<h3>{strMeasure2}</h3>
					</div>
					<div>
						<h3>{strIngredient3}</h3>
						<h3>{strMeasure3}</h3>
					</div>
					<div>
						<h3>{strIngredient4}</h3>
						<h3>{strMeasure4}</h3>
					</div>
					<div>
						<h3>{strIngredient5}</h3>
						<h3>{strMeasure5}</h3>
					</div>
					<div>
						<h3>{strIngredient6}</h3>
						<h3>{strMeasure6}</h3>
					</div>
				</div>
				<p>{strInstructions}</p>
				<Link to='/'>Return</Link>
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
