import SkillSection from './SkillSection.js';

const SkillSections = ({ dataset, onDelete }) => {
	return (
		<>
			{dataset.map((data) => (
				<SkillSection
					key={data.id}
					data={data}
					onDelete={onDelete}
				></SkillSection>
			))}
		</>
	);
};

export default SkillSections;
