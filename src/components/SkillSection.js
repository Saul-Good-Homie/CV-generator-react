import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SkillSection = ({ data, onDelete }) => {
	return (
		<div className="section">
			<h3>
				{data.name}{' '}
				<FaTimes
					onClick={() => onDelete(data.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
		</div>
	);
};

export default SkillSection;
