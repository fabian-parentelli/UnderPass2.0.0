import './newProductHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';

const NewProductHelp = () => {

    return (
        <div id='newProductHelp'>

            <TitleHelp
                title='Crear un Producto'
                paragraph='Proceso bastante sencillo para crear un nuevo producto'
                goTo='newProductHelp'
            />

            <div className='newProductHelpA'>
                <img className='newProductHelpAImg' src={imagesHelp.newProductA} alt="img" />
                <div>
                    <h2>Guía para Crear un Producto</h2>
                    <p>Para crear un producto en nuestra plataforma, tienes tres opciones:</p>
                    <ol>
                        <li>Haz clic en el <strong>banner</strong> correspondiente.</li>
                        <li>En la barra de navegación, selecciona el desplegable <strong>"Plataforma"</strong> y luego haz clic en <strong>"Crear Producto"</strong>.</li>
                        <li>En la barra de navegación, selecciona el desplegable <strong>"Usuario"</strong> y luego elige <strong>"Panel"</strong> para acceder al panel de administración. Luego, localiza <strong>"Productos"</strong> en el submenú lateral izquierdo.</li>
                    </ol>
                </div>
            </div>

            <div className='newProductHelpB'>
                <p className='newProductHelpP'>Una vez que estés en la sección de productos:</p>
                <ol>
                    <li>Haz clic en el botón <strong>"Crear"</strong>.</li>
                    <li>Selecciona las fotos del producto. Puedes subir hasta 7 imágenes.</li>
                    <li>Completa la información del producto:
                        <ul>
                            <li>Nombre</li>
                            <li>Descripción corta</li>
                            <li>Precio en tu moneda local</li>
                            <li>Stock disponible</li>
                        </ul>
                        <p>Recuerda que puedes modificar esta información más adelante.</p>
                    </li>
                    <li>Utiliza el interruptor de visibilidad. Por defecto, tu producto será visible solo en underMarket (el mercado). Si deseas que sea visible también en tu sitio web, selecciona "Mercado y Mi Sitio".</li>
                    <li>Completa la descripción larga del producto. Te recomendamos incluir todas las especificaciones relevantes, como colores, tamaños, funcionalidad, etc.</li>
                </ol>
            </div>

            <div className='newProductHelpC'>
                <img src={imagesHelp.newProductB} alt="img" />
                <img src={imagesHelp.newProductC} alt="img" />
            </div>

        </div>
    );
};

export default NewProductHelp;