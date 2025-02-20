import React from 'react';
import Image from 'next/image';

function Recipe({ recipe }) {
	return (
		<div>
			<Image
				height={200}
				width={200}
				alt={recipe.name}
				src={recipe.thumbnail_url}
			/>
			<div>{recipe.name}</div>
		</div>
	);
}

export default Recipe;
