import './cardProducts.scss';
import CarouselManuel from '../../utils/CarouselManual/CarouselManual';
import Favorite from '../../utils/Favorite/Favorite';

const CardProducts = ({ products }) => {

    return (
        <div className='cardProducts'>
            {products && products.map((prod) => (
                <div key={prod._id} className='cardProduct'>
                    <div className='cardProductDivImg'>
                        <Favorite id={prod._id} />
                        <CarouselManuel images={prod.img} />
                    </div>
                    <h3>{prod.name}</h3>
                    <p>{prod.description.small}</p>
                    <div className='cardProductsButton'>
                        <p>${prod.price}</p>
                        <button className='btnCard'>Ver</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardProducts;