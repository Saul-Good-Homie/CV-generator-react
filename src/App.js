import { useState } from 'react';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Sections from './components/Sections.js';

function App() {
	const [dataset, setDataset] = useState([
		{
			id: 1,
			name: 'University of Oregon',
			from: '2010',
			to: '2015',
			Degree: 'Bachelor of Science',
			GPA: 4.0,
		},
		{
			id: 2,
			name: 'North Dakota State University',
			from: '2015',
			to: '2017',
			Degree: 'MBA',
			GPA: 4.0,
		},
	]);

	// Delete a resume section
	const deleteSection = (id) => {
		setDataset(dataset.filter((data) => data.id !== id));
	};

	return (
		<div className="container">
			<Header />
			<Subheader name="Education" />
			<Sections dataset={dataset} onDelete={deleteSection} />

			<Subheader name="Work Experience" />

			<Subheader name="Skills" />
		</div>
	);
}

export default App;
