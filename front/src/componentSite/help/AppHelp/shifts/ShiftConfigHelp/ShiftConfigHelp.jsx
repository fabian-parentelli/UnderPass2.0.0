import './shiftConfigHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftConfigHelp = () => {

    return (
        <div id='shiftConfigHelp'>
            <TitleHelp
                title='Como funciona la configuración'
                paragraph='Sistema de gestión de turnos y susu configuraciónes'
                goTo='shiftConfigHelp'
            />

            <section>
                <h2>1. Disposición Física</h2>
                <p>
                    La disposición física se refiere a cuántas localidades posees para brindar tu servicio.
                    Por ejemplo, si tienes dos salas que pueden atender en simultáneo, la disposición física es de 2.
                </p>
                <p>
                    Además, indica si existe algún límite de personas.
                    Ejemplo: Si tienes 2 salas de ensayo, en la sala A (ensayo de bandas), el número de integrantes no es relevante,
                    pero en la sala B (clases de danza), puedes establecer un número máximo de personas admitidas.
                </p>
                <p>
                    Es importante especificar esta información, ya que las reservas podrán hacerse hasta el número máximo de localidades disponibles a la misma hora.
                </p>
            </section>

            <section>
                <h2>2. Días, Precios y Horarios Generales</h2>
                <p>
                    Define los días de la semana que el local estará abierto, la hora de apertura, la hora de cierre,
                    un precio general y la fracción horaria en minutos.
                </p>
                <p>
                    Ejemplo: Si la fracción es de una hora, coloca 60 minutos; si es cada dos horas, coloca 120 minutos.
                </p>
            </section>

            <section>
                <h2>3. Las Secciones</h2>
                <p>
                    Las secciones permiten alquilar un espacio sin especificar divisiones o bien con ellas.
                    Ejemplo: Un estudio de grabación se alquila de una hora a otra sin dividir en secciones.
                </p>
                <p>
                    Sin embargo, si enseñas distintas disciplinas en un local (ej. danza, canto, fotografía),
                    puedes crear secciones dentro de una sala específica (ej. Sala B).
                    Ingresa el nombre de la sección, los días y horarios que funciona, el precio y el máximo de personas.
                </p>
                <p>
                    Si no especificas el precio o el máximo de personas, se utilizarán los datos generales.
                    Esto es útil para casos como danza (máximo de 5 personas) o canto (máximo de 10 personas).
                </p>
            </section>

            <section className='shiftWhatIsHelpLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>
        </div>
    );
};

export default ShiftConfigHelp;