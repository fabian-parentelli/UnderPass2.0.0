import './cardProducts.scss';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CardProducts = ({ products }) => {

    console.log(products);

    return (
        <div className='cardProducts'>
            {products && products.map((prod) => (
                <div key={prod._id} className='cardProduct'>
                    <div className='cardProductDivImg'>
                        <StarBorderIcon className='star' />
                        <img src={prod.img[0].imgUrl} alt="img" />
                    </div>

                    {/* Estoy aca haciendo la card de los productos */}
                </div>
            ))}
        </div>
    );
};

export default CardProducts;