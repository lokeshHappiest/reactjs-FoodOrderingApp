import react, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
