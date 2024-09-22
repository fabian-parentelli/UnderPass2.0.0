import './vewDataprod.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SweetAlert from '../../../../component/utils/SweetAlert';
import { useCartContext } from '../../../../context/CartContext';
import { getLastPriceApi } from '../../../../helpers/prices/getLastPrice.api.js';
import NonStock from '../NonStock/NonStock.jsx';

const VewDataprod = ({ product }) => {

    const { addToCart, isInCart, updateQuantity } = useCartContext();
    const [isSweet, setIsSweet] = useState(false);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const country = localStorage.getItem('country');

    useEffect(() => {
        const fetchData = async () => {
            if (country) {
                const response = await getLastPriceApi({ country: country, name: 'products' })
                if (response.status === 'success') setPrice(response.result.price);
                else console.log(response);
            }
        }; if (country) fetchData();
    }, []);

    const handleAddToCart = (product, nav) => {
        const inCart = isInCart(product._id);
        setIsSweet(true);
        if (inCart) {
            updateQuantity(product._id, inCart.quantity + 1);
        } else {
            addToCart({
                _id: product._id,
                quantity: 1,
                stock: product.quantity,
                price: product.price + ((product.price * price) / 100),
                is: 'product',
                name: product.name,
                description: product.description,
                img: product.img[0].imgUrl
            });
        };
        setTimeout(() => { navigate(nav) }, 2000);
    };

    return (
        <div className='vewDataprod'>
            <div className='vewDataprovData'>
                <h4>{product.name}</h4>
                <div className='line' style={{ backgroundColor: '#f45c14' }}></div>
                <p>{product.description.small}</p>
                <p>${product.price}</p>
                <p style={{ color: 'gray' }}>
                    {product.quantity > 0 && `Stock: ${product.quantity}`}
                    {product.quantity > 0
                        ? (product.quantity === 1 ? ' Unidad' : ' Unidades')
                        : 'Sin Stock'
                    }
                </p>
            </div>
            <div className='vewDataprovBtn'>
                {product.quantity > 0
                    ? <>
                        <button className='btn btnB bbProd' onClick={() => handleAddToCart(product, '/cart')}>Comprar ahora</button>
                        <button className='btn btnD bbProd' onClick={() => handleAddToCart(product, '/')}>Agregar al carrito</button>
                    </>
                    : <NonStock product={product} />
                }
            </div>
            {isSweet && <SweetAlert onClose={() => setIsSweet(false)} message={'Producto agregado al carrito'} />}
        </div>
    );
};

export default VewDataprod;