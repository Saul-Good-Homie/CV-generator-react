import { useState } from 'react';

const AddPersonal = ({ onAdd }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [occupation, setOccupation] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (!firstName) {
			alert('Please Enter a Name');
			return;
		}
		onAdd({ firstName, lastName, occupation, address, phone, email });
		setFirstName('');
		setLastName('');
		setOccupation('');
		setAddress('');
		setPhone('');
		setEmail('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<input
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Occupation"
					value={occupation}
					onChange={(e) => setOccupation(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="555-555-5555"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="example@email.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
			</div>
			<input type="submit" className="btn btn-block" value="Save" />
		</form>
	);
};

export default AddPersonal;
