import './applicationHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';

const ApplicationHelp = () => {

    return (
        <div id='applicationHelp'>

            <TitleHelp
                title='Solicitudes'
                paragraph='En este segmento veremos como crear y verificar solicitudes.'
                goTo='applicationHelp'
            />

            <p style={{ marginTop: '2rem' }}>En la sección de Solicitudes, encontrarás dos opciones: <strong>Crear Solicitud</strong> y <strong>Ver Solicitudes</strong>. Siempre comenzamos con la opción <strong>Ver Solicitudes</strong>.</p>
            <img src={imagesHelp.application} alt="img" />

            <div className='applicationHelpText'>
                <p>En esta ventana, verás una tabla con todas las solicitudes. Los datos mostrados incluyen:</p>
                <ul>
                    <li>Título de la solicitud</li>
                    <li>País</li>
                    <li>Fecha de creación</li>
                    <li>Tus datos personales</li>
                    <li>Tipo de publicidad</li>
                    <li>Estado de pago (pagado o no). Puedes hacer clic en esta columna para ser dirigido al carrito y realizar el pago de la publicidad.</li>
                    <li>Estado de la solicitud (activa o no). Si está activa, puedes desactivarla pausando la solicitud, lo que la dejará sin efecto. También puedes revertir este cambio y volver a activarla.</li>
                    <li>Visibilidad en la plataforma (si ha sido vista o no)</li>
                </ul>
            </div>

            <div className='applicationHelpImgs'>
                <img className='applicationHelpImgsA' src={imagesHelp.titleApplication} alt="img" />
                <img className='applicationHelpImgsB' src={imagesHelp.activeApplication} alt="img" />
            </div>

            <div className='applicationHelpText'>
                <p>Al hacer clic en el título de una solicitud, la tabla se expandirá para mostrar datos adicionales, como:</p>
                <ul>
                    <li>Si solicitaste estar en la portada</li>
                    <li>Categoría de la publicidad</li>
                    <li>Días comprados</li>
                    <li>Cualquier indicación o comentario que hayas dado</li>
                </ul>
            </div>

            <div className='applicationHelpNew'>
                <img className='applicationHelpNew1' src={imagesHelp.newApplication} alt="img" />
                <img className='applicationHelpNew2' src={imagesHelp.textAreaApplication} alt="img" />
            </div>

            <div className='applicationHelpDIV'>
                <p>En la sección <strong>Crear Solicitud</strong>, lo primero que debes hacer es elegir el tipo de publicidad. Existen tres tipos: <strong>Banners</strong>, <strong>Cards</strong> y <strong>Separator</strong>.</p>
                <ul>
                    <li><strong>Banners:</strong> Son las publicidades que aparecen en la parte superior de la página principal cuando abres la plataforma. Es una imagen grande que se desplaza como un carrusel junto a otras imágenes.</li>
                    <li><strong>Cards:</strong> Son tarjetas publicitarias que se intercalan entre los eventos y productos.</li>
                    <li><strong>Separator:</strong> Es un separador que aparece cada 8 cards. Este es único y no se desplaza como un carrusel, sino que ocupa todo el ancho de la página.</li>
                </ul>
                <p>Una vez que elijas el tipo de publicidad, deberás completar los siguientes datos:</p>
                <ol>
                    <li><strong>Título:</strong> Para identificar tu publicidad.</li>
                    <li><strong>Categoría:</strong> Selecciona si es publicidad de un evento, producto, sitio web o noticias.</li>
                    <li><strong>Portal:</strong> Puedes elegir si quieres que la publicidad aparezca en la página de inicio. Esto tiene un costo adicional. Si no seleccionas esta opción, la publicidad se mostrará en la página de productos o sitios, según corresponda.</li>
                    <li><strong>Enlace:</strong> Proporciona un enlace relevante, como a la página de tu evento en UnderSite, tu página propia dentro del sitio.</li>
                    <li><strong>Días de publicación:</strong> Selecciona los días que deseas que la publicidad esté activa. Al lado, verás el costo diario y el total según la cantidad de días seleccionados. A mayor cantidad de días, menor será el costo por día.</li>
                    <li><strong>Banner:</strong> Puedes optar entre "Mi Banner" (diseñado por ti) o "Banner de UnderPass" (diseñado por nosotros). Si eliges la primera opción, asegúrate de respetar las medidas en píxeles proporcionadas para el tipo de publicidad (banner, cards, separator). Si eliges la segunda opción, se abrirá un cuadro de texto donde podrás detallar qué deseas publicitar, proporcionando toda la información necesaria.</li>
                    <li><strong>CloudUp:</strong> Sube tu publicidad, logo o imágenes que quieras que utilicemos para diseñar tu publicidad. El desarrollo del banner no tiene costo adicional.</li>
                </ol>
                <p>Recuerda que, una vez recibida toda la información y si no hay dudas, la publicidad será publicada en un máximo de 48 horas hábiles. Los días de publicación comenzarán a contar cuando la publicidad esté activa. Si surge alguna duda, nos pondremos en contacto contigo.</p>

            </div>

        </div>
    );
};

export default ApplicationHelp;