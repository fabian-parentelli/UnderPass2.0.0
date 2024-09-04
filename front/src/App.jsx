import CartProvider from "./context/CartContext";
import LoginProvider from "./context/LoginContext";
import UnderProvider from "./context/UnderContext";
import RoutesComp from "./routers/Routes";

function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <UnderProvider>
          <RoutesComp />
        </UnderProvider>
      </CartProvider>
    </LoginProvider>
  );
};

export default App;