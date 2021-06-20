import SkillSection from './SkillSection.js';

const SkillSections = ({ dataset, onDelete }) => {
	return (
		<div className="skills">
			{dataset.map((data) => (
				<SkillSection
					key={data.id}
					data={data}
					onDelete={onDelete}
				></SkillSection>
			))}
		</div>
	);
};

export default SkillSections;
