import './wantBannerHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils';

const WantBannerHelp = () => {

    return (
        <div id='wantBannerHelp'>
            <TitleHelp
                title='Quiero estar en el Banner'
                paragraph='Si deseas estar en el banner aquí te dejo el paso a paso'
                goTo='wantbannerhelp'
            />

            <div className='wantBannerHelpImg'>
                <img src={imagesHelp.panel} alt="img" />
                <img src={imagesHelp.advertising} alt="img" />
                <img src={imagesHelp.cretaeAdvertising} alt="img" />
            </div>

            <ol>
                <li><strong>Acceder al Panel de Usuario:</strong>
                    <ul>
                        <li>En la parte superior del navegador, encontrarás un menú desplegable llamado <strong>"Usuario"</strong>. Haz clic en él y selecciona el ítem <strong>"Panel"</strong>. Esto te llevará al panel de administración del Usuario.</li>
                    </ul>
                </li>
                <li><strong>Navegar a Publicidad:</strong>
                    <ul>
                        <li>En el lado izquierdo del panel, encontrarás una barra de navegación. Haz clic en el ítem <strong>"Publicidad"</strong>. Esto te llevará a la ventana donde podrás gestionar tus solicitudes de publicidad.</li>
                    </ul>
                </li>
                <li><strong>Crear una Nueva Publicidad:</strong>
                    <ul>
                        <li>En esta ventana, verás un botón que dice <strong>"Crear"</strong>. Haz clic en él. A continuación, se te dará la opción de elegir entre <strong>"Banner"</strong>, <strong>"Publicidad Cards"</strong> y <strong>"Separador"</strong>. Selecciona <strong>"Banner"</strong> para crear un nuevo banner publicitario.</li>
                    </ul>
                </li>
                <li><strong>Completar el Formulario del Banner:</strong>
                    <ul>
                        <li><strong>Título:</strong> Ingresa el título de tu banner.</li>
                        <li><strong>Categoría:</strong> Selecciona la categoría que mejor describa tu banner. Las opciones disponibles son <strong>"Publicidad"</strong>, <strong>"Eventos"</strong>, <strong>"Productos"</strong> o <strong>"Noticias"</strong>.</li>
                        <li><strong>Cantidad de Días:</strong> Indica el número de días que deseas que tu banner sea visible. El precio se ajustará automáticamente según la duración. Recuerda que a más días, mayores descuentos. Puedes ver la lista de precios y descuentos al pasar el mouse sobre el ícono de un papel con símbolo de precio.</li>
                    </ul>
                </li>
            </ol>

            <div className='wantBannerHelpImg'>
                <img className='imgWePort' src={imagesHelp.createBanner} alt="img" />
            </div>

            <ol>
                <li><strong>Subir el Banner:</strong>
                    <ul>
                        <li><strong>Switch:</strong> Indica si ya tienes el banner listo o si necesitas que lo creemos por ti. Si decides enviar el tuyo, deberás proporcionar dos tipos de imágenes:
                            <ul>
                                <li><strong>1583x380 px</strong> para computadoras.</li>
                                <li><strong>1080x1080 px</strong> para celulares.</li>
                            </ul>
                        </li>
                        <li>Si eliges que lo creemos nosotros, se abrirá un área de texto donde podrás especificar qué deseas visualizar en el banner y cualquier otra información relevante.</li>
                    </ul>
                </li>
                <li><strong>Subir Imágenes:</strong>
                    <ul>
                        <li>Utiliza el <strong>Cloud File Upload</strong> para subir tus banners o imágenes de logo. Si solicitaste que lo hagamos nosotros, puedes subir las imágenes necesarias aquí.</li>
                    </ul>
                </li>
                <li><strong>Pagar y Confirmar:</strong>
                    <ul>
                        <li>Una vez completado el formulario y subidas las imágenes, serás redirigido al carrito para realizar el pago del servicio.</li>
                        <li>Después del pago, procesaremos tu solicitud en un plazo de <strong>24 horas hábiles</strong>. Si las imágenes proporcionadas están bien, las subiremos a la plataforma. Si no, nos pondremos a trabajar de inmediato para crear el banner según tus especificaciones.</li>
                    </ul>
                </li>
                <li><strong>Inicio de la Publicidad:</strong>
                    <ul>
                        <li>Los días de visibilidad comenzarán a contar una vez que el banner esté en la plataforma. Te notificaremos cuando el banner esté activo. Generalmente, esto ocurre entre <strong>24 y 48 horas hábiles</strong> después del pago.</li>
                    </ul>
                </li>
            </ol>

        </div>
    );
};

export default WantBannerHelp;