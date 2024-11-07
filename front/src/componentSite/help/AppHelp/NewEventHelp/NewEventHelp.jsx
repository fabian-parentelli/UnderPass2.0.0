import './newEventHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils';
import UnderEventsLog from '../../../../component/fonts/UnderEventsLog/UnderEventsLog';

const NewEventHelp = () => {

    return (
        <div id='newEventHelp'>
            <TitleHelp
                title='Crear evento'
                paragraph='Crear un evento es simple pero conlleva varios pasos.'
                goTo='newEventHelp'
            />

            <section className='newEventHelpA'>
                <div>
                    <p>En la barra de navegación, dentro del desplegable <span>"Plataforma"</span>, encontrarás un ítem llamado <span>"Crear evento"</span>. Al hacer clic, serás dirigido a la página correspondiente.</p>
                    <h4>1. Verificación de inicio de sesión</h4>
                    <p>Si no has iniciado sesión, serás redirigido al formulario de inicio. Una vez que inicies sesión, volverás automáticamente a la página de creación de evento.</p>
                    <h4>2. Datos financieros</h4>
                    <p>Si no has proporcionado tus datos financieros (necesarios para recibir pagos después del evento), serás redirigido al formulario correspondiente. Una vez completado, regresarás automáticamente a "Crear evento".</p>
                </div>
                <img src={imagesHelp.eventProgress} alt="img" />
            </section>

            <section className='newEventHelpA'>
                <div>
                    <h4>Pasos para crear tu evento:</h4>
                    <p>En la parte superior de la página verás una barra de progreso con los siguientes pasos:</p>
                    <p><span>Información - Imagen - Localización - Entradas - Confirmar</span></p>
                </div>
            </section>

            <section className='newEventHelpA'>
                <div>
                    <h4>Información</h4>
                    <p>Completa los siguientes campos:</p>
                    <p><span>Título</span> del evento.</p>
                    <p><span>Categoría</span>: Selecciona una opción. Si ninguna encaja, selecciona <em>Otros</em> y escribe tu categoría personalizada.</p>
                    <p><span>Admite menores de 18 años</span>: Por defecto en "No", pero puedes cambiarlo.</p>
                    <p><span>Entradas</span>: Indica si son libres o pagas.</p>
                    <p><span>Día del Evento</span>: Selecciona día, mes y año.</p>
                    <p><span>Horario de inicio</span> y <span>Horario de fin</span>: En formato 24 horas.</p>
                    <p><span>Evento Público</span>: Si seleccionas "No", aparecerá un campo para ingresar una contraseña. De lo contrario, cualquier persona podrá acceder.</p>
                    <p><span>Descripción</span>: Te recomendamos escribir una descripción de 674 caracteres para promocionar tu evento.</p>
                    <p><span>Invitados</span>: Escribe los nombres de los invitados o el elenco, separados por comas (ejemplo: Invitado uno,Invitado dos).</p>
                </div>
                <img className='eventInfoHelp' src={imagesHelp.eventInfo} alt="img" />
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p>Una vez completado, haz clic en <span>Siguiente</span> para avanzar al siguiente paso.</p>
                    <p>Al hacer clic, guardas tu progreso. Si cierras la plataforma, los datos quedarán guardados. Si deseas comenzar de nuevo, puedes hacer clic en el botón <span>Eliminar</span> en la sección de Información para restablecer todo.</p>
                </div>
            </section>

            <section className='newEventHelpA'>
                <img className='eventInfoHelp' src={imagesHelp.eventVideo} alt="img" />
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <h4>Imagen</h4>
                    <p>En esta sección puedes:</p>
                    <p>Subir un video de YouTube (opcional).</p>
                    <p>Elegir entre subir una imagen (recomendamos 220px por 220px) o seleccionar un <span>Pre-set</span> que ofrecemos. Si seleccionas un pre-set, se mostrará una imagen con la información del evento impresa.</p>
                </div>
            </section>

            <img style={{ marginTop: '2rem' }} className='eventInfoHelpImg' src={imagesHelp.eventUpload} alt="img" />
            <img style={{ marginTop: '2rem' }} className='eventInfoHelpImgB' src={imagesHelp.eventPreset} alt="img" />

            <section className='newEventHelpA'>
                <div style={{ textAlign: 'center' }}>
                    <h4>Localización</h4>
                    <p>Completa los campos:</p>
                    <p><span>Departamento/Provincia</span></p>
                    <p><span>Ciudad</span></p>
                    <p><span>Dirección</span> y <span>Número de puerta</span></p>
                    <p><span>Lugar</span>: Nombre del edificio o locación (teatro, bar, centro cultural, etc.).</p>
                    <p>Luego, confirma la ubicación en el mapa. Si no coincide, selecciona <span>No coincide</span> para que nosotros lo ajustemos manualmente.</p>
                </div>
                <img className='eventInfoHelp' src={imagesHelp.eventLocation} alt="img" />
            </section>

            <section className='newEventHelpA'>
                <div>
                    <h4>Entradas</h4>
                    <p>Esta sección consta de tres etapas: <span>Crear la entrada</span>, <span>Agregar al evento</span>, y <span>Confirmar</span>.</p>
                    <p><span>Activa</span>: Si deseas que la entrada esté inactiva temporalmente, puedes desactivarla.</p>
                    <p><span>Descripción</span>: Ejemplo: generales, preventa, platea.</p>
                    <p><span>Cantidad/Stock</span>: Indica el stock de la entrada que estás creando.</p>
                    <p><span>Precio</span></p>
                    <p><span>Hora y Día de vencimiento</span>: Define hasta cuándo estarán disponibles las entradas.</p>
                    <p>Una vez agregadas las entradas, verás una tabla con todas ellas, donde puedes desactivar, eliminar o modificar cada una.</p>
                </div>
                <img className='eventInfoHelp' src={imagesHelp.eventTicket} alt="img" />
            </section>

            <section className='newEventHelpB'>
                <img src={imagesHelp.eventConfirm} alt="img" />
                <div>
                    <h3>Confirmar</h3>
                    <p>Finalmente, revisa toda la información ingresada antes de confirmar tu evento. Una vez confirmado, tu evento estará disponible en nuestra plataforma y, dependiendo de la configuración, también en tu sitio web.</p>

                </div>
            </section>

            <section className='newEventHelpLog'>
                <UnderEventsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderEvent</span> de <span>UnderPass</span>.</p>
            </section>
        </div>
    );
};

export default NewEventHelp;