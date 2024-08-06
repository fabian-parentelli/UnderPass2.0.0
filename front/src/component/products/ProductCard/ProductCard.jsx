import './productCard.scss';
import { Link } from 'react-router-dom';
import Favorite from '../../utils/Favorite/Favorite';
import CarouselManuel from '../../utils/CarouselManual/CarouselManual';

const ProductCard = ({ prod }) => {

    return (
        <div className='productCard'>
            <div className='cardProductDivImg'>
                <Favorite id={prod._id} />
                {prod.quantity < 1 && <p style={{ color: 'red' }}>Sin Stock</p>}
                <CarouselManuel images={prod.img} />
            </div>
            <div className='line' style={{ backgroundColor: '#f45c14' }}></div>
            <h3>{prod.name}</h3>
            <p>{prod.description.small}</p>
            <div className='cardProductsButton'>
                <p>${prod.price}</p>
                <Link to={`/product/${prod._id}`} style={{ textDecoration: 'none' }}>
                    <button className='btnCard'>Ver</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;