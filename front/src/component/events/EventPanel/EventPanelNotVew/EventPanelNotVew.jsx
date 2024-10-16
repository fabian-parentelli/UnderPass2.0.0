import './eventPanelNotVew.scss';
import { useEffect, useState } from 'react';
import UnderEventsLog from '../../../fonts/UnderEventsLog/UnderEventsLog';

const EventPanelNotVew = () => {

    const [width, setWidth] = useState(4);

    useEffect(() => {
        if (window.innerWidth > 767) setWidth(4)
        else setWidth(2);
    }, [window.innerWidth]);

    return (
        <div className='eventPanelNotVew'>

            <div className='eventPanelNotVewText'>
                <p>Los eventos son gratuitos para el productor del mismo.</p>
                <p>El costo de mantenimiento corre por cuenta del cliente.</p>
                <p>En caso de que el Evento sea cancelado, <strong className='colUE'>UnderPass</strong> llevará a cabo la devolución de los montos recaudados a los Usuarios, previa aprobación y coordinación por parte del Organizador, así como la respectiva notificación pública del mismo.</p>
                <p>Si hubiera modificaciones en la configuración del Evento, tales como cambios de fecha, horario, ubicación o modificaciones significativas en su programación, <strong className='colUE'>UnderPass</strong> ofrecerá la devolución de los montos pagados a aquellos Usuarios que lo soliciten, siempre que cuenten con la autorización del Organizador.</p>
                <p>En caso de que el Evento no se realice o sea suspendido por cualquier motivo, la devolución de los montos se efectuará en las mismas condiciones, descontando la comisión correspondiente a <strong className='colUE'>UnderPass</strong>.</p>
            </div>

            { width && <UnderEventsLog size={width} />}
        </div>
    );
};

export default EventPanelNotVew;