import React from 'react';
import Button from './Button.js';

const Subheader = ({ name, onAdd, showAdd }) => {
	return (
		<header className="sub-header">
			<h2>{name}</h2>
			<Button
				color={showAdd ? 'Red' : 'Green'}
				text={showAdd ? 'Close' : 'Add'}
				onAdd={onAdd}
			/>
		</header>
	);
};

export default Subheader;
