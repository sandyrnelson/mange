'use client';
import React from 'react';
import UseRecipes from '../../hooks/UseRecipes';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function Recipes() {
	const { data, isLoading, error } = UseRecipes();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;
	if (!data || data.length === 0) return <div>No recipes found.</div>;

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{data.map((recipe) => (
				<RecipeCard recipe={recipe} key={recipe.id} />
			))}
		</div>
	);
}

export default Recipes;
