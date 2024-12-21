import './shiftFindCustomer.scss';

const ShiftFindCustomer = ({ configId }) => {

    // Aplicar la lógica de obtener clientes
    // Relacionar la base de datos con el confiId

    return (
        <div className='shiftFindCustomer'>
            <div>
                <label className='pgray'>Cliente</label>
                <select>
                    <option value="">Elegir</option>
                    {/* Hacer el mapeo con los clientes */}
                </select>
            </div>

            <section>
                {/* Mostrar datos del cliente */}
            </section>
        </div>
    );
};

export default ShiftFindCustomer;