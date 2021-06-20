import { useState } from 'react';
import Header from './components/Header';
import Subheader from './components/Subheader';
import EducationSections from './components/EducationSections.js';
import WorkSections from './components/WorkSections.js';
import AddEducation from './components/AddEducation.js';
import AddWork from './components/AddWork';

function App() {
	//Education data
	const [showAddEducation, setShowAddEducation] = useState(false);
	const [educationDataset, setEducationDataset] = useState([]);

	//Add education section from form
	const addEducation = (education) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newEducation = { id, ...education };
		setEducationDataset([...educationDataset, newEducation]);
	};

	// Delete an education section
	const deleteEducation = (id) => {
		setEducationDataset(educationDataset.filter((data) => data.id !== id));
	};

	//Work Experience data:
	const [showAddWork, setShowAddWork] = useState(true);
	const [workDataset, setWorkDataset] = useState([]);

	//Add work section from form
	const addWork = (work) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newWork = { id, ...work };
		setWorkDataset([...workDataset, newWork]);
	};

	// Delete an work section
	const deleteWork = (id) => {
		setWorkDataset(workDataset.filter((data) => data.id !== id));
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
			<EducationSections
				dataset={educationDataset}
				onDelete={deleteEducation}
			/>

			<Subheader
				name="Work Experience"
				onAdd={() => setShowAddWork(!showAddWork)}
				showAdd={showAddWork}
			/>
			{showAddWork && <AddWork onAdd={addWork} />}
			<WorkSections dataset={workDataset} onDelete={deleteWork} />

			<Subheader name="Skills" />
		</div>
	);
}

export default App;
