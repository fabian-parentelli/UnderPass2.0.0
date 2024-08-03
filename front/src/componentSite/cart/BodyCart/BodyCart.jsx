import './bodyCart.scss';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../../context/CartContext';

const BodyCart = () => {

    const {cart} = useCartContext();

    return (
        <>
            {cart.length > 0 &&
                <Link to={'/cart'} className='bodyCart'>
                    <Badge badgeContent={cart.length} color="success">
                        <ShoppingCartIcon color="action"  style={{fontSize: '2rem'}}/>
                    </Badge>
                </Link>
            }
        </>
    );
};

export default BodyCart;