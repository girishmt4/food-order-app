import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';



const HeadercartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <spa className={classes.badge}>
            3
        </spa>
    </button>
};

export default HeadercartButton;