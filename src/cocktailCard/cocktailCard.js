import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';

const CocktailCard = (props) => {
	// console.log(props);
	const { id, name, image, info, glass, history } = props;

	return (
		<div
			onClick={() => {
				history.push(`/${id}`);
			}}>
			<h1>{name}</h1>
			<img src={image} alt='type' style={{ width: '100px' }} />
			<h3>{info}</h3>
			<h3>{glass}</h3>
		</div>
	);
};

export default withRouter(CocktailCard);
