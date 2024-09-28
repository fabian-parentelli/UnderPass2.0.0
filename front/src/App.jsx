import CartProvider from "./context/CartContext";
import LoginProvider from "./context/LoginContext";
import NewsProvider from "./context/NewsContext";
import UnderProvider from "./context/UnderContext";
import RoutesComp from "./routers/Routes";

function App() {

  return (
    <LoginProvider>
      <CartProvider>

        <UnderProvider>
          <NewsProvider>

            <RoutesComp />
            
          </NewsProvider>
        </UnderProvider>

      </CartProvider>
    </LoginProvider>
  );
};

export default App;