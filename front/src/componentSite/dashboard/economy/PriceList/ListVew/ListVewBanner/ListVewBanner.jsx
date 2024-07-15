import './listVewBanner.scss';

const ListVewBanner = ({ banner }) => {

    return (
        <div className='listVewBanner'>
            {banner &&
                <>
                    <p><strong>Nombre:</strong> {banner.name}</p>
                    <p><strong>Fecha:</strong> {new Date(banner.date).toLocaleString()}</p>
                    <p><strong>Precio:</strong> ${banner.price}</p>
                    <p>Descuentos</p>
                    {banner.sales.map((ban) => (
                        <p key={ban._id}><strong>Dia {ban.days}:</strong> %{ban.sale}</p>

                    ))}
                </>
            }
        </div>
    );
};

export default ListVewBanner;