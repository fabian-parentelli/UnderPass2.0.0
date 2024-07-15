import './listVew.scss';
import ReactToPrint from 'react-to-print';
import { useEffect, useState, useRef } from 'react';
import ListVewBanner from './ListVewBanner/ListVewBanner';
import { getListPriceApi } from '../../../../../helpers/prices/getListPrice.api.js';
import { pdfPriceList } from '../../../../../helpers/pdf/pdfPriceList.api.js';

const ListVew = ({ country, setLoading }) => {
    const [list, setList] = useState(null);
    const componentRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getListPriceApi(country);
            if (response.status === 'success') setList(response.result);
            setLoading(false);
        }; fetchData();
    }, [country]);

    const handleClick = async () => await pdfPriceList(country);

    return (
        <div className='listVew'>
            {list && (
                <div ref={componentRef}>
                    <ListVewBanner banner={list.banner} />
                    <div className='line'></div>
                </div>
            )}
            <div className='listVewBtn'>
                <ReactToPrint
                    trigger={() => <button className='btn btnA' style={{ color: 'black' }}>Imprimir</button>}
                    content={() => componentRef.current}
                    pageStyle={'margin: 2rem'}
                />
                <button className='btn btnD' onClick={handleClick}>PDF</button>
            </div>
        </div>
    );
};

export default ListVew;
