import './shiftHolidaysHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftHolidaysHelp = () => {

    return (
        <div id='shiftHolidaysHelp'>

            <TitleHelp
                title='Turnos, vacaciones y cerrado'
                paragraph='Cerrar tu sistema de turnos, vacaciones.'
                goTo='shiftHolidaysHelp'
            />

            <section className='shiftHolidaysHelpSect'>
                <p>Para cerrar tu negocio indefinidamente o temporalmente, accede al panel del administrador. En la barra lateral izquierda, entra en la sección de Turnos. Luego, dirígete a Configuración.</p>
            </section>

            <img className='shiftHolidaysHelpImg' src={imagesHelp.shiftBookingA} alt="img" />

            <section className='shiftHolidaysHelpSect'>
                <h3>Cerrar Sitio de Turnos</h3>
                <p>En la solapa Cerrar - Vacaciones, encontrarás un interruptor con las opciones cerrado o abierto. Actívalo según la opción que desees.</p>
                <p>Al cerrar tu negocio, dejarás de ser visible en el módulo de turnos de UnderShift. Si tienes un sitio en UnderSite con un calendario de turnos integrado, el sitio seguirá activo, pero el calendario no se mostrará, impidiendo que los usuarios reserven.</p>
                <p>Si tienes reservas activas al momento de cerrar, estas no se cancelan automáticamente. Debes comunicarte con los clientes para reprogramar o suspender sus turnos.</p>
            </section>

            <img className='shiftHolidaysHelpImg' src={imagesHelp.shiftHolidaysClosed} alt="img" />

            <section className='shiftHolidaysHelpSect'>
                <h3>Vacaciones</h3>
                <p>En la misma solapa, más abajo, encontrarás otro interruptor con la opción “De vacaciones” sí o no.</p>
                <p>Si seleccionas no, tu sistema de turnos funcionará con normalidad. Si seleccionas sí, podrás definir una fecha de inicio y una fecha de fin para el período de vacaciones.</p>
                <p>Si hoy es 1 de enero y defines vacaciones del 15 al 30 de enero, los usuarios podrán reservar turnos normalmente antes y después de esas fechas. Durante el período de vacaciones, no se podrán hacer reservas.</p>
                <p>Antes del inicio de las vacaciones, se mostrará un aviso indicando que próximamente el negocio estará cerrado. Mientras esté cerrado, el sistema mostrará un mensaje indicando la fecha de reapertura. En la portada del sitio habrá un aviso adicional sobre el cierre temporal.</p>
            </section>

            <img className='shiftHolidaysHelpImg' src={imagesHelp.shiftHolidaysVac} alt="img" />

            <section className='shiftWhatIsHelpLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>

        </div>
    );
};

export default ShiftHolidaysHelp;