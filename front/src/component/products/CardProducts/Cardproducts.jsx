import './cardProducts.scss';
import ProductCard from '../ProductCard/ProductCard';
import PublicityCards from '../../publicity/PublicityCards/PublicityCards';
import SeparatorPublicity from '../../publicity/SeparatorPublicity/SeparatorPublicity';

const CardProducts = ({ products }) => {

    return (
        <div className='cardProducts'>
            {products && products.map((prod, index) => (
                prod.type === 'product'
                    ? (<ProductCard prod={prod} key={index} />)
                    : prod.type === 'cards' ? (<PublicityCards prod={prod} key={index} />)
                    : <SeparatorPublicity prod={prod} key={index} />
            ))}
        </div>
    );
};

export default CardProducts;