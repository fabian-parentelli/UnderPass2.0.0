import './wantFrontPage.scss';
import { useEffect, useState } from 'react';
import LoadSmall from '../../utils/LoadSmall/LoadSmall';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import { useCartContext } from '../../../context/CartContext.jsx';
import PriceAddToPortal from '../PriceAddPortal/PriceAddPortal.jsx';
import { getAmountInPortalApi } from '../../../helpers/publicity/getAmountInPortal.api.js';

const WantFrontPage = ({ modalIsOpen, closeModal, data }) => {

    const {addToCart} = useCartContext();

    const [isThere, setIsThere] = useState(0);
    const [small, setSmall] = useState(true);
    const [values, setValues] = useState({ days: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAmountInPortalApi();
            if (response.status === 'success') setIsThere(response.result);
            else console.log(response);
            setSmall(false);
        }; fetchData();
    }, []);

    const handleApplication = () => {
        // Ver como resuelvo porque tengo que agregarlo a la base de datos
        // luego de eso agregarlo  al carrito...
        ////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////
    };

    return (
        <ModalCustom modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <div className='wantFrontPage'>
                <h2>Quiero estar en la Portada</h2>
                {small ? <LoadSmall />
                    : isThere >= 10
                        ? <p className='isThereNo'>No hay lugar por el momento</p>
                        : <p className='isThereOk'>Quadan {10 - isThere} lugares.</p>
                }
                {!small && isThere <= 10 &&
                    <>
                        <PriceAddToPortal data={data} values={values} setValues={setValues} />
                        <button className='btn btnA'>Solicitar</button>
                    </>
                }
            </div>
        </ModalCustom>
    );
};

export default WantFrontPage;