import './shiftConfigDataHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';


const ShiftConfigDataHelp = () => {

    return (
        <div id='shiftConfigDataHelp'>
            <TitleHelp
                title='Configurar turnos'
                paragraph='Paso a paso en la configuración de turnos'
                goTo='shiftConfigDataHelp'
            />

            <section className='shiftConfigDataHelpSect'>
                <h3>En el panel de administarción del usuario.</h3>
                <p>En la barra izquierda, selecciona la opción <span>Turnos</span>. Una vez dentro, encontrarás cuatro botones:</p>
                <span>Mis turnos - reservas - Administrar - Configuración</span>
                <p className='pgray'>Selecciona esta opción para configurar el sistema</p>
                <p>En la sección de configuración, encontrarás cinco áreas principales:</p>
                <p>Empresa - disposición física - Días, precios y horarios - Secciones - Enlace a tu sitio</p>
                <img src={imagesHelp.shiftConfigA} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftConfigDataHelpSect'>
                <h3>Empresa</h3>
                <p>Aquí debes ingresar los datos principales de tu negocio:</p>
                <div>
                    <p>Nombre del negocio</p>
                    <p>Categoría</p>
                    <p>Descripción (entre 600 y 700 caracteres)</p>
                    <p>Logo (imagen preferentemente de 200x200px)</p>
                    <p>Dirección: provincia, ciudad, calle y número.</p>
                </div>
                <p>Luego de ingresar la dirección, haz clic en el botón <span>Mapa</span>. Aparecerán opciones de direcciones posibles; selecciona la correcta haciendo clic en el símbolo de <span>+</span>. Asegúrate de que el mapa quede activado correctamente en tu sistema de turnos.</p>
                <img src={imagesHelp.shiftConfigB} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftConfigDataHelpSect'>
                <h3>Disposición Física</h3>
                <p>Define los ambientes donde se brindarán los servicios:</p>
                <p>Indica la cantidad de ambientes (por defecto, 1).</p>
                <p>Asigna un nombre a cada ambiente (ejemplo: "Sala Principal").</p>
                <p>Activa o desactiva el <span>Switch de cantidad de personas</span>:</p>
                <p>Si está desactivado, la hora reservada quedará bloqueada para otros usuarios.</p>
                <p>Si está activado, debes indicar el número máximo de personas que admite el ambiente por hora (ejemplo: 5 personas para una clase de guitarra).</p>
                <img src={imagesHelp.shiftConfigC} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftConfigDataHelpSect'>
                <h3>Días, Precios y Horarios Generales</h3>
                <p>Aquí defines:</p>
                <p>Horario de apertura y cierre (nota: la hora de cierre <span>no</span> es la última hora reservable).</p>
                <p>Días de funcionamiento seleccionando los días de la semana.</p>
                <p>Precio general por turno reservado.</p>
                <p>Fracción horaria en minutos:</p>
                <p>Ejemplo por hora: 60 minutos.</p>
                <p>Ejemplo por dos horas: 120 minutos.</p>
                <p>El sistema calculará automáticamente el costo según la fracción configurada y el tiempo reservado por el cliente.</p>
                <img src={imagesHelp.shiftConfigD} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftConfigDataHelpSect'>
                <h3>Secciones</h3>
                <p>Si deseas agregar secciones dentro de un ambiente:</p>
                <p>Activa el <span>Switch de agregar secciones</span>.</p>
                <p>Selecciona el ambiente donde deseas agregar una sección y haz clic en <span>+</span>.</p>
                <p>Configura los siguientes datos para la sección:</p>
                <p>Nombre de la sección.</p>
                <p>Horario de apertura y cierre.</p>
                <p>Días de funcionamiento (por ejemplo, martes y jueves).</p>
                <p>Precio específico de la sección (opcional; si no ingresas, se usará el precio general).</p>
                <p>Número máximo de personas (opcional; si no ingresas, se usará el límite del ambiente).</p>
                <img src={imagesHelp.shiftConfigE} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftConfigDataHelpSect'>
                <h3>Enlace a tu Sitio</h3>
                <p>Haz clic en el botón <span>Buscar sitios</span>. El sistema mostrará los sitios que tienes creados en UnderPass. Selecciona el que quieras vincular al sistema de turnos.</p>
                <p>Si no tienes un sitio creado, termina la configuración del sistema de turnos y luego crea el sitio. Podrás vincularlos tanto desde el editor de sitios como desde la configuración de turnos.</p>
                <img src={imagesHelp.shiftConfigF} alt="imgA" className='shiftConfigDataHelpImgA' />
            </section>

            <section className='shiftConfigDataHelpSect'>
                <h3>Finalizar Configuración</h3>
                <p>Cuando hayas completado todo, haz clic en el botón <span>Configurar</span>. Si ya tienes configuraciones previas, el botón dirá <span>Actualizar</span>.</p>
            </section>

            <section className='shiftWhatIsHelpLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>

        </div>
    );
};

export default ShiftConfigDataHelp;