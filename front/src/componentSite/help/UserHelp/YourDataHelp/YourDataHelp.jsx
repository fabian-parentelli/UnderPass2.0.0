import './yourDataHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils';


const YourDataHelp = () => {

    return (
        <div id='yourDataHelp'>
            
            <TitleHelp
                title='Modificar tus Datos'
                paragraph='Datos personales y financieros'
                goTo='yourDataHelp'
            />

            <div className='yourDataHelpImg'>
                <img src={imagesHelp.panel} alt="img" />
                <img src={imagesHelp.yourData} alt="img" />
            </div>

            <div className='yourDataHelpText'>
                <p>En la barra de navegación superior, encontrarás un desplegable llamado <strong>Usuario</strong>. Haz clic en él y selecciona <strong>Panel</strong>. Esto te llevará al panel de administración del usuario.</p>

                <p>En el lado izquierdo, verás un submenú. Busca y selecciona <strong>TUS DATOS</strong>. Una vez dentro, encontrarás tus datos personales a la izquierda y los datos financieros a la derecha.</p>

                <h3>Datos Personales</h3>
                <p>En esta sección, podrás ver y actualizar:</p>
                <div className='yourDataHelpTexDiv'>
                    <ul>
                        <li>Nombre</li>
                        <li>Email</li>
                        <li>Cumpleaños</li>
                        <li>Teléfono</li>
                        <li>DNI</li>
                        <li>Provincia</li>
                        <li>Ciudad</li>
                        <li>Dirección</li>
                        <li>Código Postal</li>
                    </ul>
                    <img src={imagesHelp.personalData} alt="img" />
                </div>
                <p>Estos datos son importantes para enviarte productos que puedas comprar y para mostrarte eventos cercanos a tu ubicación.</p>

                <h3>Datos Financieros</h3>
                <p>En esta sección, podrás gestionar la información necesaria para recibir pagos si vendes algún producto, reservas turnos o entradas para eventos. Mantener estos datos actualizados asegura que no haya errores en la entrega de tus ingresos generados con nosotros.</p>

                <p style={{marginTop: '2rem'}}><strong>Recuerda siempre hacer clic en el botón de actualizar una vez que hayas realizado cambios.</strong></p>
            </div>

            <div className='yourDataHelpEnd'>
                <img src={imagesHelp.financialData} alt="img" />
            </div>

        </div>
    );
};

export default YourDataHelp;