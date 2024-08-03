import './vewTheProduct.scss';
import VewImg from './VewImg/VewImg';
import PrevImg from './PrevImg/PrevImg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import VewDataprod from './VewDataprod/VewDataprod';
import OtherProducts from './OtherProducts/OtherProducts';
import { getProductByIdApi } from '../../../helpers/products/getProductById.api.js';

const VewTheProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isImg, setIsImg] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductByIdApi(id);
            if (response.status === 'success') {
                const activeImages = response.result.img.filter(img => img.actives);
                const updatedProduct = { ...response.result, img: activeImages };
                setProduct(updatedProduct);
            } else console.log(response);
            setLoading(false);
        }; if (id) fetchData();
    }, [id]);

    return (
        <div className='vewTheProduct'>
            {product &&
                <div className='vewTheProductCont'>
                    <div className='vewTheProductDiv'>
                        <PrevImg imgs={product.img} isImg={isImg} setIsImg={setIsImg} />
                        <VewImg img={product.img[isImg]} />
                        <VewDataprod product={product} />
                    </div>
                    <p className='logDescription'>{product.description.long}</p>
                    <p className='logDescription'>
                        <span>Ubicación:</span> {product.location.city} - {product.location.province} - {product.location.country === 'UY' ? 'Uruguay' : 'Argentina'}
                    </p>
                </div>
            }
            <OtherProducts setLoading={setLoading} />
            <Load loading={loading} />
        </div>
    );
};

export default VewTheProduct;