import React from 'react';
import { FaTimes } from 'react-icons/fa';

const PersonalSection = ({ data, onDelete }) => {
	return (
		<div className="section flex">
			<div>
				<h3>
					{data.firstName} {data.lastName}{' '}
				</h3>
				<h4>{data.occupation}</h4>
				<FaTimes
					onClick={() => onDelete(data.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</div>
			<div>
				<p>{data.phone}</p>
				<p>{data.email}</p>
				<h4>{data.address}</h4>
			</div>
		</div>
	);
};

export default PersonalSection;
