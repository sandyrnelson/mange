import React from 'react';

function MultiSelector({ data, selected, setSelection }) {
	function isSelected(option) {
		return selected.includes(JSON.stringify(option.id));
	}
	return (
		<>
			{data.map((option) => (
				<div key={option.id}>
					<input
						type='checkbox'
						id={option.id}
						value={option.id}
						checked={isSelected(option)}
						onChange={(event) => {
							setSelection(event.target.value, event.target.checked);
						}}
					/>
					<label htmlFor={option.id}>{option.display_name}</label>
				</div>
			))}
		</>
	);
}

export default MultiSelector;
