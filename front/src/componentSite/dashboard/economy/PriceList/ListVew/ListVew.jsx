import './listVew.scss';
import { useEffect, useState } from 'react';
import { getAllPriceApi } from '../../../../../helpers/prices/getAllPrice.api.js';

const ListVew = ({ country, setLoading }) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllPriceApi();
            if (response.status === 'success') setList(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [country]);

    return (
        <div className='listView'>
            {list
                .filter(pri => pri.country === country)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(pri => (
                    <div key={pri._id} className='listViewCont'>
                        <p>{pri.name}: {pri.price < 19 ? '' : '$'}{pri.price}{pri.price < 19 ? '%' : ''} </p>
                        {pri.sales && pri.sales.map((p) => (
                            <div key={p._id} className='listViewSales'>
                                <p>{p.days} dias {p.sale}% de descuento</p>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default ListVew;