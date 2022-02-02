import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

    const onClick = () => {
        console.log("Click!");
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
};

Header.defaultProps = {
    title: "Default Task Tracker Title"
}

Header.prototypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue'
// }

export default Header;