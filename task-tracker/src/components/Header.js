import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
        <h1>{props.title}</h1>
        <Button title="Add" color="green"/>
        </header>
    )
}

Header.defaultProps = {
    title: "Track Tasks!"
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
 
