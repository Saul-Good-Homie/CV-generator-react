import React from 'react';
import { FaTimes } from 'react-icons/fa';

const EducationSection = ({ data, onDelete }) => {
	return (
		<div className="section">
			<h3>
				{data.name}{' '}
				<FaTimes
					onClick={() => onDelete(data.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
			<h4>{data.degree}</h4>
			<div className="flex">
				<p>From: {data.from}</p>
				<p>To: {data.to}</p>
			</div>

			<p>GPA: {data.gpa}</p>
		</div>
	);
};

export default EducationSection;
