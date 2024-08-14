import './cardProducts.scss';
import ProductCard from '../ProductCard/ProductCard';
import PublicityCards from '../../publicity/PublicityCards/PublicityCards';
import SeparatorPublicity from '../../publicity/SeparatorPublicity/SeparatorPublicity';

const CardProducts = ({ products }) => {

    return (
        <div className='cardProducts'>
            {products && products.map((prod) => (
                prod.type === 'product'
                    ? (<ProductCard prod={prod} key={prod._id} />)
                    : prod.type === 'cards' ? (<PublicityCards prod={prod} key={prod._id} />)
                    : <SeparatorPublicity prod={prod} key={prod._id} />
            ))}
        </div>
    );
};

export default CardProducts;