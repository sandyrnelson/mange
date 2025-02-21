import React from 'react';

function MaxWidthContainer({ children }) {
	return (
		<div
			style={{
				maxWidth: '100%',
			}}>
			{children}
		</div>
	);
}

export default MaxWidthContainer;
