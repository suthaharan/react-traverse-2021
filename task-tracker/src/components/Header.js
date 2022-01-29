import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAddClick, showAdd}) => {
    const location = useLocation();
    // const onClick = () => {
    //     console.log('clickbuttonheader');
    // }

    return (
        <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/home' && (
        <Button text={showAdd ? "Add": "Close"} color={showAdd ? "green": "red"} onClick={onAddClick}/>
        )}
        </header>
    )
}

Header.defaultProps = {
    title: "Track Tasks!"
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JS 
// const headingStyle ={
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header
 
