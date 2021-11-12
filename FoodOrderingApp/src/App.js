import react, {useState} from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/cart/Cart"

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
