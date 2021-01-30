import React from 'react';
import styles from './cocktailCard.module.scss';
import { withRouter } from 'react-router';

const CocktailCard = (props) => {
	// console.log(props);
	const { id, name, image, info, mainAlch, history } = props;

	return (
		<div
			className={styles.container}
			onClick={() => {
				history.push(`/${id}`);
			}}>
			<p className={styles.name}>{name}</p>
			<img className={styles.image} src={image} alt='type' />
			<p className={styles.mainAlch}>{mainAlch}</p>
			<p className={styles.info}>{info}</p>
		</div>
	);
};

export default withRouter(CocktailCard);
