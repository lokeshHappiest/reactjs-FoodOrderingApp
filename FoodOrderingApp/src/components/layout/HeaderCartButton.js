import react, { useContext, useState, useEffect } from "react";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const cartItems = cartCtx.items;
  const totalItemsCount = cartItems.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    let timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)
    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  const buttonStyle = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  return (
    <button className={buttonStyle} onClick={props.onCartClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
