import './updEventHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';
import UnderEventsLog from '../../../../component/fonts/UnderEventsLog/UnderEventsLog';

const UpdEventHelp = () => {

    return (
        <div id='updEventHelp'>
            <TitleHelp
                title='Actualizar eventos'
                paragraph='Visualiza y modifíca eventos.'
                goTo='updEventHelp'
            />

            <section className='updEventHelpSectA'>
                <p><span>Acceso al Panel de Administración</span></p>
                <p>En la barra de navegación, despliega el menú de Usuario y selecciona la opción "Panel". Esto te llevará al área de administración.</p>
                <p><span>Panel de Eventos</span></p>
                <p>En la barra lateral izquierda, encontrarás la sección "Eventos". Haz clic en "Ver" para acceder al panel de eventos.</p>

            </section>

            <section className='updEventHelpSectB'>
                <img src={imagesHelp.eventPanel} alt="img" />
            </section>

            <section className='updEventHelpSectA'>
                <p><span>Filtros de Búsqueda</span></p>
                <p>Al inicio, verás un menú de filtros que te permite buscar eventos por categoría, localidad, fecha, y estado (activo o inactivo). También dispones de un campo de búsqueda donde puedes buscar eventos por nombre: a medida que escribes, los resultados se actualizan automáticamente.</p>
                <p><span>Tabla de Eventos</span></p>
                <p>Debajo de los filtros, verás una tabla con todos los eventos. Los elementos principales son:</p>
            </section>

            <section className='updEventHelpSectC'>
                <img src={imagesHelp.eventImagePanel} alt="img4" />
                <img src={imagesHelp.eventInfoPanel} alt="img3" />
            </section>

            <section className='updEventHelpSectD'>
                <p><span>Imagen de Banner</span>: Puedes hacer clic en la imagen del banner para cambiarla. Tienes la opción de subir una nueva imagen o seleccionar una de las opciones predeterminadas.</p>
                <p><span>Categoría, Ubicación, Lugar, Fecha, y Hora</span>: Información básica sobre el evento.</p>
                <p><span>Estado (Público o Privado)</span>.</p>
                <p><span>Actualizar Evento</span>: Representado con un ícono de dos flechas. Al hacer clic, verás todos los detalles del evento para poder actualizarlos. Recuerda guardar los cambios con el botón de "Actualizar".</p>
            </section>

            <section className='updEventHelpSectB'>
                <img src={imagesHelp.eventTicketsPanel3} alt="img" />
            </section>

            <section className='updEventHelpSectD'>
                <p><span>Gestión de Tickets</span>: En este apartado, verás una tabla con los diferentes tipos de tickets disponibles. Puedes desactivar, eliminar o actualizar los tickets existentes, o agregar uno nuevo si es necesario.</p>
                <p><span>Desactivar Evento</span>: Si un evento se suspende, puedes desactivarlo temporalmente desde esta opción.</p>
            </section>

            <section className='updEventHelpSectLog'>
                <UnderEventsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderEvent</span> de <span>UnderPass</span>.</p>
            </section>
        </div >
    );
};

export default UpdEventHelp;