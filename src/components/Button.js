// Deconstructed props into text and color.

import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {
  return (
    <button 
        className='btn' 
        onClick={onClick}
        style={{backgroundColor: color}}>
            {text}
    </button>
  )
};

Button.defaultProps = {
    color: 'steelblue',
}

Button.prototypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;
