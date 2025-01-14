import './shiftMyHlep.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftMyHlep = () => {

    return (
        <div id='shiftMyHlep'>

            <TitleHelp
                title='Ver mis turnos'
                paragraph='Ver las reservas de turnos de los clientes.'
                goTo='shiftMyHlep'
            />

            <section className='shiftBookingHelpSect'>
                <h3>Acceso al Panel de Turnos</h3>
                <p>En el panel de administración del usuario, encontrarás en la barra lateral izquierda una opción llamada "Turnos". Al seleccionarla, se mostrarán cuatro botones: "Mis Turnos", "Reservas", "Administrar" y "Configurar". Haz clic en <span>"Mis turnos"</span>.</p>
                <img src={imagesHelp.shiftConfigA} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftBookingHelpSect'>
                <h3>Mis turnos</h3>
                <p>En el cuadro informativo encontrarás un registro de reservas ordenado por fecha.</p>
                <p>Lo primero que verás será la fecha y hora, seguido por la sala y, si aplica, la sección correspondiente.</p>
                <p>También se mostrará el local, donde podrás ver su nombre y, al hacer clic en el sitio, serás redirigido a su página UnderPass.</p>
                <p>Además, tendrás un apartado de contacto que abrirá un chat para comunicarte con el administrador.</p>
                <p>Por último, encontrarás la opción de suspender, que te llevará a otra página donde podrás elegir entre postergar la fecha o cancelarla.</p>
                <img src={imagesHelp.myShiftImg} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftMyHlepLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>
        </div>
    );
};

export default ShiftMyHlep;