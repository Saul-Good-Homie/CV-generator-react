import { useState } from 'react';

const AddEducation = ({ onAdd }) => {
	const [name, setName] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			alert('Please Enter a Skill');
			return;
		}
		onAdd({ name });
		setName('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<input
					type="text"
					placeholder="Enter Skill"
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>

				<input type="submit" className="btn btn-block" value="Save" />
			</div>
		</form>
	);
};

export default AddEducation;
