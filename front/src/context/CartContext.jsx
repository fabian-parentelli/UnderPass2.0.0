import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const init = JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => setCart((prevCart) => { return [...prevCart, item] });
    const isInCart = (id) => cart.find(item => item._id === id);
    const emptyCart = () => setCart([]);
    const totalProduct = (id) => {
        const data = cart.find((item) => item._id === id);
        if (data) {
            const result = data.price * data.quantity;
            return result;
        };
    };
    const totalCart = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };
    const removeItem = (id) => setCart(cart.filter(item => item._id !== id));
    const totalQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0); // total de items
    const updateQuantity = (id, newQuantity) => {
        const index = cart.findIndex(item => item._id === id);
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index] = { ...updatedCart[index], quantity: newQuantity };
            setCart(updatedCart);
        };
    };
    const isProduct = () => cart.some(prod => prod.is === 'product');

    return (
        <CartContext.Provider value={{
            cart, addToCart, isInCart, emptyCart, totalProduct, removeItem, totalQuantity, updateQuantity,
            totalCart, isProduct
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;