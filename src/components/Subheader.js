import React from 'react';
import Button from './Button.js';

const Subheader = ({ name }) => {
	return (
		<header className="sub-header">
			<h2>{name}</h2>
			<Button text="Add" />
		</header>
	);
};

export default Subheader;
