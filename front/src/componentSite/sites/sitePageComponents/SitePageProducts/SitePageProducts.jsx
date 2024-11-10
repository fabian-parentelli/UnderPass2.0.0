import './sitePageProducts.scss';
import ProductCard from '../../../../component/products/ProductCard/ProductCard';

const SitePageProducts = ({ site }) => {

    return (
        <div className='sitePageProducts'>
            <h2 className='colUM'>Nuestro merchandising</h2>
            <section>
                {site.products && site.products.length > 0 && site.products.map((prod) => (
                    <ProductCard prod={prod} key={prod._id} />
                ))}
            </section>
        </div>
    );
};

export default SitePageProducts;