import React from 'react';

function Wrapper({ children }) {
	return (
		<div
			style={{
				display: 'flex',
			}}>
			{children}
		</div>
	);
}

export default Wrapper;
