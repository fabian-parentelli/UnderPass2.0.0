import './publicityVewHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';

const PublicityVewHelp = () => {

    return (
        <div id='publicityVewHelp'>

            <TitleHelp
                title='Ver mis publicidades'
                paragraph='Podrás ver y accionár sobre tus publicidades'
                goTo='publicityVewHelp'
            />

            <img className='publicityVewHelpImg' src={imagesHelp.vewPublicty} alt="img" />

            <div className='publicityVewHelpText'>
                <h2>Cómo gestionar tu publicidad en nuestra plataforma</h2>
                <ol>
                    <li>
                        <strong>Acceso a Publicidad:</strong>
                        <p>Una vez que estés dentro del menú de usuario, selecciona la opción <strong>Publicidad</strong>.</p>
                    </li>
                    <li>
                        <strong>Navegación en Publicidad:</strong>
                        <p>Dentro de la sección de Publicidad, verás dos opciones: <strong>Solicitud</strong> y <strong>Publicidad</strong>. Elige <strong>Publicidad</strong>.</p>
                    </li>
                    <li>
                        <strong>Visualización de tu Publicidad:</strong>
                        <p>En esta sección, encontrarás una tabla con la siguiente información sobre tu publicidad:</p>
                        <ul>
                            <li><strong>Imagen:</strong> Muestra la imagen de tu publicidad.</li>
                            <li><strong>Título:</strong> Un título que te ayudará a identificar tu publicidad fácilmente.</li>
                            <li><strong>Tipo:</strong> El tipo de publicidad que has seleccionado (por ejemplo, cards, separator o banner).</li>
                            <li><strong>Portal:</strong> Indica si tu publicidad aparece en la portada de la plataforma. Si la opción es "NO", tu publicidad se mostrará en otras secciones, como productos, eventos, turnos, sitios, etc.</li>
                            <li><strong>Links:</strong> El enlace a tu UnderSite, que es tu página dentro de nuestra plataforma.</li>
                            <li><strong>Cierre:</strong> La fecha en que tu publicidad finalizará.</li>
                            <li><strong>Días disponibles:</strong> La cantidad de días restantes de tu publicidad.</li>
                            <li><strong>+Tiempo:</strong> Esta opción te permite solicitar más tiempo para tu publicidad.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Modificar tu Publicidad:</strong>
                        <p>Si en la columna <strong>Portal</strong> aparece "NO", puedes hacer clic para comprar espacio en la portada. Solo pagarás la diferencia por los días restantes, sin necesidad de abonar la tarifa completa.</p>
                        <p>Al hacer clic en <strong>+Tiempo</strong>, se abrirá una ventana donde podrás seleccionar la cantidad de días adicionales que deseas. Una vez completado el formulario, podrás añadir esta extensión a tu carrito de compras y proceder al pago, ya sea para extender la duración de tu publicidad o para aparecer en la portada.</p>
                    </li>
                </ol>
            </div>


        </div>
    );
};

export default PublicityVewHelp;