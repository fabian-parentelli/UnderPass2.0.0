import './shiftPostponeHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftPostponeHelp = () => {

    return (
        <div id='shiftPostponeHelp'>
            
            <TitleHelp
                title='Posponer y suspender turnos'
                paragraph='Posponer y supender turnos como administrador y usuario.'
                goTo='shiftPostponeHelp'
            />

            <section className='shiftPostponeHelpSect'>
                <p>En el panel de administración del usuario, en la barra lateral izquierda, encontrarás la sección <strong>TURNOS</strong>.</p>
            </section>

            <img className='shiftPostponeHelpImg' src={imagesHelp.postponeDash} alt="img" />

            <section className='shiftPostponeHelpSect'>
                <p>Una vez dentro, busca el turno que deseas suspender o eliminar.</p>
                <p>Si eres administrador, los turnos estarán en <strong>RESERVAS</strong>. Si eres cliente, estarán en <strong>MIS TURNOS</strong>.</p>
            </section>

            <img className='shiftPostponeHelpImg' src={imagesHelp.postponeGet} alt="img" />

            <section className='shiftPostponeHelpSect'>
                <p>Cuando encuentres el turno que deseas modificar, presiona el botón de <strong>Suspender</strong>, identificado con un icono de flecha hacia atrás.</p>
                <p>Esto abrirá una ventana con opciones para posponer o suspender el turno.</p>
            </section>

            <img className='shiftPostponeHelpImg' src={imagesHelp.postponeMenu} alt="img" />
            <img className='shiftPostponeHelpImg' src={imagesHelp.postponeEmial} alt="img" />

            <section className='shiftPostponeHelpSect'>
                <p>Si decides <strong>posponer</strong>, puedes enviar un mensaje a la otra persona sugiriendo un nuevo día y horario.</p>
                <p>Si decides <strong>suspender</strong>, la plataforma manejará la devolución del dinero según el método de pago:</p>
                <p>Si la transacción se realizó a través de nuestra billetera <strong>UnderPay</strong>, el dinero será reembolsado en un plazo de 72 horas hábiles.</p>
                <p>Si la transacción se hizo fuera de nuestra plataforma, la devolución deberá acordarse entre los involucrados.</p>
                <p>Consulta nuestros <strong>Términos y Condiciones</strong> para más detalles.</p>
            </section>

            <img className='shiftPostponeHelpImg' src={imagesHelp.postponeChoise} alt="img" />

            <section className='shiftPostponeHelpSect'>
                <p>En cualquier caso, se enviará una alerta al administrador y una notificación por email al usuario.</p>
                <p>Si el turno se <strong>suspende</strong>, simplemente se notifica.</p>
                <p>Si el turno se <strong>pospone</strong>, se debe dar una respuesta:</p>
                <p>- Se puede <strong>aceptar</strong> y elegir una nueva fecha y hora.</p>
                <p>- Se puede <strong>rechazar</strong> y suspender el turno, aplicando las mismas condiciones de la transacción original.</p>
                <p>La decisión final será comunicada a la otra parte.</p>
            </section>

            <img className='shiftPostponeHelpImg' src={imagesHelp.postponeResponse} alt="img" />

            <div className='shiftMyHlepLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </div>

        </div>
    );
};

export default ShiftPostponeHelp;