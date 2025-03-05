'use client';
import React, { useState } from 'react';
import FormInput from '@/ui/FormInput/FormInput';
import UseTags from '@/hooks/UseTags';
import MultiSelector from '@/components/MultiSelector/MultiSelector';
import ImageUploader from '@/components/ImageUploader/ImageUploader';

const defaultRecipeFields = {
	name: '',
	total_time_minutes: '',
	tags: [],
	recipe_link: '',
	thumbnail_url: null,
};

function CreateRecipeForm() {
	const [newRecipe, setNewRecipe] = useState(defaultRecipeFields);

	const { name, total_time_minutes, tags, recipe_link } = newRecipe;

	const { data: tagsList } = UseTags();

	function handleSubmit(event) {
		event.preventDefault();
		console.log('form submitted', newRecipe);
	}

	function handleInput(event) {
		event.preventDefault();
		const { name: key, value } = event.target;
		setNewRecipe({ ...newRecipe, [key]: value });
	}

	function handleTags(tagId, addition) {
		if (addition) {
			setNewRecipe({ ...newRecipe, tags: [...tags, tagId] });
		} else {
			setNewRecipe({ ...newRecipe, tags: tags.filter((tag) => tag !== tagId) });
		}
	}
	function handleChange(image) {
		setNewRecipe({ ...newRecipe, thumbnail_url: image });
	}

	return (
		<div>
			CreateRecipeForm
			<form onSubmit={handleSubmit}>
				<ImageUploader setImage={handleChange} alt={name} />

				<FormInput
					label='Name'
					required
					onChange={handleInput}
					name='name'
					value={name}
				/>

				<FormInput
					label='Cooking Time in minutes'
					required
					onChange={handleInput}
					name='total_time_minutes'
					value={total_time_minutes}
				/>
				<FormInput
					label='Recipe Link'
					required
					onChange={handleInput}
					name='recipe_link'
					value={recipe_link}
				/>

				<fieldset>
					<legend>Tags:</legend>
					<MultiSelector
						data={tagsList}
						selected={tags}
						setSelection={handleTags}
					/>
				</fieldset>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default CreateRecipeForm;
