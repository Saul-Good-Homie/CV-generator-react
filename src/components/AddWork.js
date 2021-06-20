import { useState } from 'react';

const AddWork = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [title, setTitle] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			alert('Please Enter a Name');
			return;
		}
		onAdd({ name, from, to, title });
		setName('');
		setFrom('');
		setTo('');
		setTitle('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name:</label>
				<input
					type="text"
					placeholder="Enter Organization Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>
				<label>Title:</label>
				<input
					type="text"
					placeholder="Enter Job Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
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
			</div>
			<input type="submit" className="btn btn-block" value="Save" />
		</form>
	);
};

export default AddWork;
