import Section from './Section.js';

const Sections = ({ dataset, onDelete }) => {
	return (
		<>
			{dataset.map((data) => (
				<Section key={data.id} data={data} onDelete={onDelete}></Section>
			))}
		</>
	);
};

export default Sections;
