import WorkSection from './WorkSection.js';

const WorkSections = ({ dataset, onDelete }) => {
	return (
		<>
			{dataset.map((data) => (
				<WorkSection
					key={data.id}
					data={data}
					onDelete={onDelete}
				></WorkSection>
			))}
		</>
	);
};

export default WorkSections;
