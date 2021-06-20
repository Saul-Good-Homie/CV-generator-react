import React from 'react';
import { FaTimes } from 'react-icons/fa';

const WorkSection = ({ data, onDelete }) => {
	return (
		<div className="section">
			<h3>
				{data.name}{' '}
				<FaTimes
					onClick={() => onDelete(data.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
			<h4>{data.title}</h4>
			<div className="flex">
				<p>From: {data.from}</p>
				<p>To: {data.to}</p>
			</div>
		</div>
	);
};

export default WorkSection;
