import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalQuantity);

  const cartShowHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
