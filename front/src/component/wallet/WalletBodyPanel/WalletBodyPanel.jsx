import './walletBodyPanel.scss';
import Checkboxes from '../../utils/Checkboxes';

const WalletBodyPanel = ({ wallet, setLoading }) => {

    return (
        <div className='walletBodyPanel'>
            <div className='walletBodyPanelChek'>
                <Checkboxes labels={['Configuración', 'Movimiento', 'Pagos', 'Cobros']} />
            </div>
            
            {/* Estoy acá quiero hacer algunos componentes falsos con string */}
            {/* Hacer Componente para ver los págos */}
            {/* Dentro de componente pagos hacer trnsferencia  */}
            {/* dentro de este ver las opciones de transeferencias  */}

        </div>
    );
};

export default WalletBodyPanel;