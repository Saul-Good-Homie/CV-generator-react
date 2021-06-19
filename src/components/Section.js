import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Section = ({ data, onDelete }) => {
	return (
		<div className="section">
			<h3>
				{data.name}{' '}
				<FaTimes
					onClick={() => onDelete(data.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
			<p>From: {data.from}</p>
			<p>To: {data.to}</p>
			<p>GPA: {data.GPA}</p>
		</div>
	);
};

export default Section;
