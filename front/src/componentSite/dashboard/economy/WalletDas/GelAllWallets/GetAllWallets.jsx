import './getAllWallets.scss';
import { useEffect, useState } from 'react';
import { getWalletsApi } from '../../../../../helpers/wallet/getWallets.api';
import Pager from '../../../../../component/utils/Pager/Pager';
import GetAllWalletTable from './GetAllWalletsTable/GetAllWalletTable';
import GetFilterAllWallets from './FilterGetAllWallets/GetFilterAllWallets';

const GetAllWallets = ({ setLoading }) => {

    const [wallets, setWallets] = useState(null);
    const [page, setPage] = useState(1);
    const [querys, setQuerys] = useState({ country: '', inWallet: null, reqMoney: null });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = {};
            if(page) query.page;
            if(querys.country) query.country = querys.country;
            if(querys.inWallet) query.inWallet = querys.inWallet;
            if(querys.reqMoney) query.reqMoney = querys.reqMoney;

            console.log(query);
            

            const response = await getWalletsApi(query);
            if (response.status === 'success') setWallets(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [page, querys]);

    const HandleChangePage = (page) => setPage(page);

    return (
        <div className='getAllWallets'>
            <h2>Billeteras</h2>
            <GetFilterAllWallets setQuerys={setQuerys} />
            {wallets && <GetAllWalletTable wallets={wallets.docs} />}
            <div className='getAllWalletsPages'>
                <Pager users={wallets} HandleChangePage={HandleChangePage} />
            </div>
        </div>
    );
};

export default GetAllWallets;