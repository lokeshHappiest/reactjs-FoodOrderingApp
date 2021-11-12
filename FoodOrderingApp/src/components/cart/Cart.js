import react, { useContext } from "react";
import Modal from "../ui/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const addHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    CartCtx.removeItem(id);
  };
  const hasItems = CartCtx.items.length > 0
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => addHandler(item)}
          onRemove={() => removeHandler(item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{CartCtx.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
