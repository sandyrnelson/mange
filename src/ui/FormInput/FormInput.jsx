import React from 'react';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<div>
			<input {...otherProps} />
			{label && (
				<label>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
