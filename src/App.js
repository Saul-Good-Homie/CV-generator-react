import { useState } from 'react';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Sections from './components/Sections.js';
import AddEducation from './components/AddEducation.js';

function App() {
	const [showAddEducation, setShowAddEducation] = useState(false);
	const [dataset, setDataset] = useState([
		// {
		// 	id: 1,
		// 	name: 'University of Oregon',
		// 	from: '2010',
		// 	to: '2015',
		// 	degree: 'Bachelor of Science',
		// 	gpa: 4.0,
		// },
		// {
		// 	id: 2,
		// 	name: 'North Dakota State University',
		// 	from: '2015',
		// 	to: '2017',
		// 	degree: 'MBA',
		// 	gpa: 4.0,
		// },
	]);

	//Add education section from form
	const addEducation = (education) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newEducation = { id, ...education };
		console.log(newEducation);
		setDataset([...dataset, newEducation]);
	};

	// Delete a resume section
	const deleteSection = (id) => {
		setDataset(dataset.filter((data) => data.id !== id));
	};

	return (
		<div className="container">
			<Header />
			<Subheader
				name="Education"
				onAdd={() => setShowAddEducation(!showAddEducation)}
				showAdd={showAddEducation}
			/>

			{showAddEducation && <AddEducation onAdd={addEducation} />}
			<Sections dataset={dataset} onDelete={deleteSection} />
			{/* <Subheader name="Work Experience" />

			<Subheader name="Skills" /> */}
		</div>
	);
}

export default App;
