import './shiftBookingHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftBookingHelp = () => {

    return (
        <div id='shiftBookingHelp'>
            <TitleHelp
                title='Ver reservas'
                paragraph='Ver las reservas de turnos de los clientes.'
                goTo='shiftBookingHelp'
            />

            <section className='shiftBookingHelpSect'>
                <h3>Acceso al Panel de Turnos</h3>
                <p>En el panel de administración del usuario, encontrarás en la barra lateral izquierda una opción llamada "Turnos". Al seleccionarla, se mostrarán cuatro botones: "Mis Turnos", "Reservas", "Administrar" y "Configurar". Haz clic en <span>"Reservas"</span>.</p>
                <img src={imagesHelp.shiftConfigA} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Vista de Reservas</h3>
                <p>Para ver las reservas, contamos con cuatro formas distintas: mes, semana, día y por usuario. Siempre comenzaremos con la vista semanal.</p>
                <img src={imagesHelp.shiftBookingA} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Vista Semanal</h3>
                <p>En esta vista, encontrarás una grilla semanal donde los días y horarios con reservas aparecerán resaltados en rosado. Además, verás la cantidad de clientes que tienen reserva en ese momento, siempre que tu configuración lo permita. Si haces clic en un horario con reserva, se abrirá una ventana mostrando un cuadro de información detallada.</p>
                <img src={imagesHelp.shiftBookingB} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Vista Mensual</h3>
                <p>En la vista mensual, se muestra un calendario interactivo. Los días que tengan reservas estarán resaltados en rosado. Al hacer clic en uno de estos días, aparecerá un cuadro de información sobre el lado derecho del calendario.</p>
                <img src={imagesHelp.shiftBookingC} alt="imgA" />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Vista Diaria</h3>
                <p>En esta vista, verás el día y la grilla horaria correspondiente. Los horarios con reservas mostrarán el nombre de la persona que realizó la reserva. Si haces clic en uno de ellos, se abrirá una ventana con el cuadro de información.</p>
                <img src={imagesHelp.shiftBookingD} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Vista por Usuario</h3>
                <p>En esta vista, podrás buscar a los usuarios con reservas activas un buscador. Al seleccionar un usuario, se mostrarán todas las reservas activas que tenga junto con su respectivo cuadro informativo.</p>
                <img src={imagesHelp.shiftBookingE} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Cuadro Informativo</h3>
                <p>El cuadro informativo incluye la fecha, la hora, el nombre de la sala, la sección en caso de que aplique, los datos del cliente, una opción para iniciar un chat con el cliente y un botón de "Suspender". Al utilizar esta última opción, se abrirá una ventana donde podrás proponer una nueva fecha para la reserva o suspenderla por algún motivo.</p>
            </section>

            <section className='shiftWhatIsHelpLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>
        </div>
    );
};

export default ShiftBookingHelp;