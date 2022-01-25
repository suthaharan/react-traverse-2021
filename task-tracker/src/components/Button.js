import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    // onClick event - since it is a component it is not going to have same click
    // const onClick = (e) => {
    //     console.log('click', e)
    // }

    return <button style={{backgroundColor: color}} className='btn' onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    text: "Add",
    color: "steelblue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button
