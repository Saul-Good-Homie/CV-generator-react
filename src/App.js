import { useState } from 'react';
import Header from './components/Header';
import Subheader from './components/Subheader';
import EducationSections from './components/EducationSections.js';
import WorkSections from './components/WorkSections.js';
import AddEducation from './components/AddEducation.js';
import AddWork from './components/AddWork';
import AddSkill from './components/AddSkill.js';
import AddPersonal from './components/AddPersonal.js';
import PersonalSections from './components/PersonalSections.js';
import SkillSections from './components/SkillSections';

function App() {
	//Personal data
	const [showAddPersonal, setShowAddPersonal] = useState(true);
	const [personalDataset, setPersonalDataset] = useState([]);

	//Add Personal section from form
	const addPersonal = (personal) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newPersonal = { id, ...personal };
		setPersonalDataset([...personalDataset, newPersonal]);
	};

	// Delete personal section
	const deletePersonal = (id) => {
		setPersonalDataset(personalDataset.filter((data) => data.id !== id));
	};

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
	const [showAddWork, setShowAddWork] = useState(false);
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

	//skill data:
	const [showAddSkill, setShowAddSkill] = useState(false);
	const [skillDataset, setSkillDataset] = useState([]);

	//Add skill section from form
	const addSkill = (skill) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newSkill = { id, ...skill };
		setSkillDataset([...skillDataset, newSkill]);
	};

	// Delete an skill
	const deleteSkill = (id) => {
		setSkillDataset(skillDataset.filter((data) => data.id !== id));
	};

	return (
		<div className="container">
			<Header />

			<Subheader
				name="Personal Information"
				onAdd={() => setShowAddPersonal(!showAddPersonal)}
				showAdd={showAddPersonal}
			/>

			{showAddPersonal && <AddPersonal onAdd={addPersonal} />}
			<PersonalSections dataset={personalDataset} onDelete={deletePersonal} />

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

			<Subheader
				name="Skills"
				onAdd={() => setShowAddSkill(!showAddSkill)}
				showAdd={showAddSkill}
			/>

			{showAddSkill && <AddSkill onAdd={addSkill} />}
			<SkillSections dataset={skillDataset} onDelete={deleteSkill} />
		</div>
	);
}

export default App;
