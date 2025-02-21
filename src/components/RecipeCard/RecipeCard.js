import React from 'react';
import styles from './RecipeCard.module.css';
import RoundedImage from '../../ui/RoundedImage/RoundedImage';

function RecipeCard({ recipe }) {
	return (
		<div className={styles.card}>
			<RoundedImage src={recipe.thumbnail_url} alt={recipe.name} fallBack='YUM' />

			<div>{recipe.name}</div>
			<div>Cook time: {recipe.cook_time_minutes} min</div>
			<div>{recipe.tags[0].display_name}</div>
		</div>
	);
}

export default RecipeCard;
