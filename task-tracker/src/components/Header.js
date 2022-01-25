import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
        <h1>{props.title}</h1>
        <Button text="Add" color="green"/>
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
 
