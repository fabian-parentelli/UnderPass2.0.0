import './getFilterAllWallets.scss';

const GetFilterAllWallets = ({ setQuerys }) => {

    const HandleChangePage = (e) => setQuerys(prev => ({ ...prev, [e.target.name]: e.target.value }));

    return (
        <div className='getFilterAllWallets'>

            <select name="country" onChange={HandleChangePage}>
                <option value="">Pais</option>
                <option value="UY">Uruguay</option>
                <option value="AR">Argentina</option>
            </select>

            <select name="inWallet" onChange={HandleChangePage}>
                <option value="">Rendimientos</option>
                <option value="true">SI</option>
                <option value="false">NO</option>
            </select>

            <select name="reqMoney" onChange={HandleChangePage}>
                <option value="">Cobrar</option>
                <option value="true">SI</option>
                <option value="false">NO</option>
            </select>

        </div>
    );
};

export default GetFilterAllWallets;