import Header from "./Header";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';



const HeadercartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>
            3
        </span>
    </button>
};

export default HeadercartButton;