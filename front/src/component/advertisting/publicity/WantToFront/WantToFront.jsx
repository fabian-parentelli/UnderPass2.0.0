import './wantToFront.scss';
import { Spinner } from 'faradaycomp'
import { useEffect, useState } from 'react';
import { imgages } from '../../../../utils/imagesData.utils.js';
import { useCartContext } from '../../../../context/CartContext';
import PriceAddToPortal from '../../PriceAddPortal/PriceAddPortal';
import { newApplicationApi } from '../../../../helpers/applications/newApplication.api.js';
import { getAmountInPortalApi } from '../../../../helpers/publicity/getAmountInPortal.api.js';

const WantToFront = ({ data, setInPortal }) => {

    const { addToCart } = useCartContext();
    const [isThere, setIsThere] = useState(0);
    const [loading, setLoading] = useState(true);
    const [dataPrice, setDataPrice] = useState(null);
    const [values, setValues] = useState({ days: 0 });
    const [bigLoad, setBigLoad] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAmountInPortalApi();
            if (response.status === 'success') setIsThere(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleApplication = async () => {
        setBigLoad(true);
        const info = {
            title: data.title,
            days: values.days,
            userId: data.application.userId || '',
            country: data.country,
            type: `${data.type}ToPortal`,
            applicationId: data._id,
            text: 'Agregar a la portada'
        };
        const formData = new FormData();
        for (const key in info) if (info.hasOwnProperty(key)) formData.append(key, info[key]);
        const response = await newApplicationApi(formData);
        if (response.status === 'success') {
            addToCart({
                _id: response.result._id,
                quantity: response.result.days,
                price: dataPrice.portal - dataPrice.price,
                is: `toPortal`,
                name: response.result.title,
                description: `Agregar ${data.type} al portal`,
                img: imgages.addToPort,
                data: dataPrice,
                end: data.end
            });
        };
        setTimeout(() => { setBigLoad(false); setInPortal({ open: false, vew: null }) }, 2000);
    };

    return (
        <div className='wantToFront'>
            <h2>Quiero estar en la portada</h2>
            {bigLoad ?
                <>
                    <Spinner color={'#f45c14'} />
                    <p>Producto agregado al carrito</p>
                </>
                :
                <>
                    {loading ? <Spinner color={'#f45c14'} />
                        : isThere >= 10
                            ? <p className='isThereNo'>No hay lugar por el momento</p>
                            : <p className='isThereOk'>Quadan {10 - isThere} lugares.</p>
                    }
                    {!loading && isThere <= 10 &&
                        <>
                            <PriceAddToPortal data={data} values={values} setValues={setValues} setDataPrice={setDataPrice} />
                            <button className='btn btnA' onClick={handleApplication}>Solicitar</button>
                        </>
                    }
                </>
            }
            <div></div>
        </div>
    );
};

export default WantToFront;