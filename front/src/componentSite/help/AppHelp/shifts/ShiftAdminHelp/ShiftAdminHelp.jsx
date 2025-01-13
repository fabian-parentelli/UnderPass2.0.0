import './shiftAdminHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftAdminHelp = () => {

    return (
        <div id='shiftAdminHelp'>

            <TitleHelp
                title='Administar turnos'
                paragraph='Autogestiona los turnos de tu negocio.'
                goTo='shiftAdminHelp'
            />

            <section className='shiftAdminHelpSect'>
                <h3>Acceso al Panel de Turnos</h3>
                <p>En el panel de administración del usuario, encontrarás en la barra lateral izquierda una opción llamada "Turnos". Al seleccionarla, se mostrarán cuatro botones: "Mis Turnos", "Reservas", "Administrar" y "Configurar". Haz clic en "Administrar".</p>
                <img src={imagesHelp.shiftConfigA} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftAdminHelpSect'>
                <h3>Interfaz de Configuración</h3>
                <p>Al entrar en la sección de configuración, verás tres áreas principales:</p>
                <p><span>Primera fila:</span> Un calendario interactivo que muestra los días habilitados según la sala seleccionada.</p>
                <img src={imagesHelp.shiftAdminA} alt="imgA" />
                <p style={{marginTop: '3rem'}}><span>Segunda fila:</span> Información sobre las salas disponibles. Si tienes una sola sala, se mostrará directamente la grilla de horarios. Si hay más de una sala, aparecerá un campo para seleccionar la sala deseada. Si la sala tiene secciones, se habilitará otro campo para elegir la sección. Una vez seleccionada la sala y, si corresponde, la sección, aparecerá la grilla de horarios para que elijas el horario deseado.</p>
                <img src={imagesHelp.shiftAdminB} alt="imgA" className='shiftConfigDataHelpImgA'/>
                <p style={{marginTop: '3rem'}}><span>Tercera fila:</span> Los datos del cliente.</p>
            </section>

            <section className='shiftAdminHelpSect'>
                <h3>Registro de Clientes</h3>
                <p>Si es la primera vez que el cliente reserva un turno, haz clic en el botón "Nuevo". Allí deberás completar los campos: Nombre, Teléfono y Email. Una vez completados, podrás realizar la reserva, y el cliente recibirá un email de confirmación.</p>
                <p>Si el cliente ya ha reservado anteriormente, utiliza el botón "Clientes". Este abrirá un buscador donde podrás encontrar a clientes registrados por su nombre.</p>
                <img src={imagesHelp.shiftAdminC} alt="imgA" className='shiftConfigDataHelpImgA'/>
            </section>

            <section className='shiftAdminHelpSect'>
                <h3>Gestión de Reservas</h3>
                <p>Una vez creada la reserva, puedes verificarla en la sección "Reservas". Desde allí, tendrás un registro detallado de las reservas realizadas.</p>
            </section>

            <section className='shiftWhatIsHelpLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>

        </div>
    );
};

export default ShiftAdminHelp;