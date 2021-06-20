import { useState } from 'react';

const AddEducation = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [gpa, setGpa] = useState('');
	const [degree, setDegree] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			alert('Please Enter a Name');
			return;
		}
		onAdd({ name, from, to, degree, gpa });
		setName('');
		setFrom('');
		setTo('');
		setDegree('');
		setGpa('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name:</label>
				<input
					type="text"
					placeholder="Enter University or College Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>
				<div className="flex">
					<label>From:</label>
					<input
						type="month"
						value={from}
						onChange={(e) => setFrom(e.target.value)}
					></input>
					<label>To:</label>
					<input
						type="month"
						value={to}
						onChange={(e) => setTo(e.target.value)}
					></input>
				</div>

				<label>Degree:</label>
				<input
					type="text"
					placeholder="Enter Degree or Certificate Obtained"
					value={degree}
					onChange={(e) => setDegree(e.target.value)}
				></input>
				<label>GPA:</label>
				<input
					type="number"
					value={gpa}
					onChange={(e) => setGpa(e.target.value)}
				></input>
			</div>
			<input type="submit" className="btn btn-block" value="Save" />
		</form>
	);
};

export default AddEducation;
