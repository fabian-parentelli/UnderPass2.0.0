import './cardProducts.scss';
import ProductCard from '../ProductCard/ProductCard';
import PublicityCards from '../../publicity/PublicityCards/PublicityCards';

const CardProducts = ({ products }) => {

    return (
        <div className='cardProducts'>
            {products && products.map((prod) => (
                prod.type === 'product'
                    ? (<ProductCard prod={prod} key={prod._id} />)
                    : (<PublicityCards prod={prod} key={prod._id} />)
            ))}
        </div>
    );
};

export default CardProducts;