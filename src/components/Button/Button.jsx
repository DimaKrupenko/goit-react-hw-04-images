import Styles from './Button.module.css'
import PropTypes from 'prop-types';


const Button = ({ onLoad }) => {
    
    return <button className={Styles.Button} type="button" onClick={onLoad}>Load more</button>
}
export default Button

Button.propTypes = {
    onLoad: PropTypes.func,
}