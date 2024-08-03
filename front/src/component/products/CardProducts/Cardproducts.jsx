import './cardProducts.scss';
import CarouselManuel from '../../utils/CarouselManual/CarouselManual';
import Favorite from '../../utils/Favorite/Favorite';
import { Link } from 'react-router-dom';

const CardProducts = ({ products }) => {

    return (
        <div className='cardProducts'>
            {products && products.map((prod) => (
                <div key={prod._id} className='cardProduct'>
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
            ))}
        </div>
    );
};

export default CardProducts;