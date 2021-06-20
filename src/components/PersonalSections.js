import PersonalSection from './PersonalSection.js';

const PersonalSections = ({ dataset, onDelete }) => {
	return (
		<>
			{dataset.map((data) => (
				<PersonalSection
					key={data.id}
					data={data}
					onDelete={onDelete}
				></PersonalSection>
			))}
		</>
	);
};

export default PersonalSections;
