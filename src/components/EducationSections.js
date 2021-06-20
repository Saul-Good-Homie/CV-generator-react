import EducationSection from './EducationSection.js';

const EducationSections = ({ dataset, onDelete }) => {
	return (
		<>
			{dataset.map((data) => (
				<EducationSection
					key={data.id}
					data={data}
					onDelete={onDelete}
				></EducationSection>
			))}
		</>
	);
};

export default EducationSections;
