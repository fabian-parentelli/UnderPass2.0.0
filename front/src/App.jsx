import CartProvider from "./context/CartContext";
import LoginProvider from "./context/LoginContext";
import RoutesComp from "./routers/Routes";

function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <RoutesComp />
      </CartProvider>
    </LoginProvider>
  );
};

export default App;