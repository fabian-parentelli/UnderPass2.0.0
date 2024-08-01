import './vewProductHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils';

const VewProductHelp = () => {

    return (
        <div id='vewProductHelp'>

            <TitleHelp
                title='Ver y modificar productos'
                paragraph='Puedes ver y modificar el estado y datos del producto.'
                goTo='vewProductHelp'
            />

            <div className='vewProductHelpA'>
                <ul>
                    <li>En la barra de navegación en la parte superior, encontrarás un desplegable llamado <strong>Usuario</strong>. Selecciona <strong>Panel</strong> para acceder al panel de administración.</li>
                    <li>En la barra lateral izquierda, selecciona <strong>Productos</strong>. Una vez dentro, verás un listado de tus productos, tanto activos como inactivos.</li>
                </ul>
                <img src={imagesHelp.panel} alt="img" />
                <img src={imagesHelp.vewProductA} alt="img" />
            </div>

            <img className='vewProductHelpB' src={imagesHelp.vewProductB} alt="img" />

            <div className='vewProductHelpC'>
                <p>Cada producto en la lista muestra:</p>
                <ul>
                    <li><strong>Foto:</strong> La imagen es solo para identificación rápida del producto.</li>
                    <li><strong>Nombre:</strong> Puedes modificar el nombre del producto. El cambio se guardará automáticamente cuando salgas del campo de entrada.</li>
                    <li><strong>Precio:</strong> El precio es visible y es editable desde aquí.</li>
                    <li><strong>Stock:</strong> Puedes actualizar la cantidad de stock. Los cambios se aplican en cuanto sales del campo de entrada.</li>
                    <li><strong>Activo:</strong> Puedes ver si el producto está activo o no. Cambia el estado haciendo clic en <strong>Sí</strong> o <strong>No</strong>, según corresponda.</li>
                </ul>
                <p>Si haces clic en <strong>Información</strong>, se abrirá una ventana con más detalles sobre el producto. En esta ventana:</p>
                <ul>
                    <li>Puedes editar todos los campos dentro de los inputs. Los cambios se guardarán al hacer clic fuera del campo o al salir de él.</li>
                    <li>El switch de <strong>Ver en tu sitio</strong> también se actualizará según las modificaciones.</li>
                </ul>
            </div>

            <div className='vewProductHelpD'>
                <img src={imagesHelp.vewProductC} alt="img" />
            </div>

            <div className='vewProductHelpC'>
                <p>Además, podrás gestionar las imágenes del producto:</p>
                <ul>
                    <li>Verás todas las imágenes asociadas al producto. Puedes activarlas o desactivarlas utilizando los botones correspondientes debajo de cada imagen.</li>
                    <li>Para agregar una nueva imagen, utiliza la opción <span class="highlight">CloudUpload</span>.</li>
                </ul>
                <p>Estos pasos te permitirán visualizar, activar/desactivar y modificar los datos de tus productos, incluyendo las imágenes.</p>
            </div>

        </div>
    );
};

export default VewProductHelp;