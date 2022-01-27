import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAddClick, showAdd}) => {

    // const onClick = () => {
    //     console.log('clickbuttonheader');
    // }

    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button text={showAdd ? "Add": "Close"} color={showAdd ? "green": "red"} onClick={onAddClick}/>
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
 
