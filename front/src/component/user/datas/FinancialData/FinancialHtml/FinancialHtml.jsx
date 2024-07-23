import './financialHtml.scss';

const FinancialHtml = ({ values, handleChange, handleSubmit, isFinancial }) => {

    return (
        <form className='financialHtml' onSubmit={handleSubmit}>
            <div className='financialDiv'>
                <div>
                    <label>Titular</label>
                    <input type="text" name='holder' onChange={handleChange} value={values.holder} required />
                </div>
                <div>
                    <label>Cuit</label>
                    <input type="text" name='cuit' onChange={handleChange} value={values.cuit} required />
                </div>
            </div>

            <div className='financialDiv'>
                <div>
                    <label>Tipo de cuenta</label>
                    <select name="account" onChange={handleChange} value={values.account} required >
                        <option value=""></option>
                        <option value="cc">Cuenta corriente</option>
                        <option value="ca">Caja de ahorro</option>
                        <option value="bd">Billetera digital</option>
                    </select>
                </div>
                <div>
                    <label>Entidad financiera</label>
                    <input type="text" name='bank' onChange={handleChange} value={values.bank} required />
                </div>
            </div>

            <div className='financialDiv'>
                <div>
                    <label>CBU/Alias</label>
                    <input type="text" name='cbu' onChange={handleChange} value={values.cbu} required />
                </div>
                <div>
                    <label>Id del Usuario</label>
                    <p><strong>ID:</strong>{values.userId}</p>
                </div>
            </div>
            <button style={{ marginTop: '1rem' }} className='btn btnC'>
                {isFinancial ? 'Actualizar' : 'Crear'}
            </button>
        </form>
    );
};

export default FinancialHtml;