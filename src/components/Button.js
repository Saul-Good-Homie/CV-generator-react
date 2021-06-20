import PropTypes from 'prop-types';

const Button = ({ text, onAdd, color }) => {
	return (
		<button style={{ backgroundColor: color }} onClick={onAdd} className="btn">
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'steelblue',
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
