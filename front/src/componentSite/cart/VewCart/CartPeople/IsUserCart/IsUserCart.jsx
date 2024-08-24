import './isUserCart.scss';
import { useCartContext } from '../../../../../context/CartContext';
import SubTotal from '../SubTotal/SubTotal';

const IsUserCart = ({ user }) => {    

    const { cart } = useCartContext();
    
    return (
        <form className='isUserCart'>
            <SubTotal />
        </form>
    );
};

export default IsUserCart;