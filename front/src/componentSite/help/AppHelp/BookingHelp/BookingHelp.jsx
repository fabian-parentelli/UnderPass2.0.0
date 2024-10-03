import './bookingHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils';
import UnderMarketLog from '../../../../component/fonts/UnderMarketLog/UnderMarketLog';

const BookingHelp = () => {

    return (
        <div id='bookingHelp'>

            <TitleHelp
                title='Reservas de productos'
                paragraph='Rservar los productos de indole merchandising.'
                goTo='bookingHelp'
            />

            <div className='bookingHelp1'>
                <p>Existen dos tipos de productos que puedes encontrar en nuestra plataforma:</p>
                <p><span>Productos comerciales:</span> Estos son artículos como guitarras, zapatillas de danza, equipos de música o iluminación.</p>
                <p><span>Productos de merchandising:</span> Son productos promocionales de tu proyecto artístico, como remeras, púas, entre otros.</p>
                <p>Cuando el stock de un <span>producto comercial</span> llega a 0, este se oculta automáticamente de la plataforma. En cambio, los <span>productos de merchandising</span> seguirán mostrándose con un mensaje que indica "Sin stock".</p>
            </div>

            <div className='bookingHelpA'>
                <img src={imagesHelp.pbComercialProduct} alt="img" />
                <img src={imagesHelp.pbMerchProduct} alt="img" />
            </div>

            <h3>Cómo realizar una reserva</h3>

            <div className='bookingHelpB'>
                <img src={imagesHelp.pbNonStock} alt="img" />
            </div>

            <div className='bookingHelp1'>
                <p>Si eres un comprador, cuando un producto esté sin stock pero aún visible (como en el caso de merchandising), podrás reservarlo. Luego, en tu panel de administración, sigue estos pasos:</p>
                <p>En el menú de la izquierda, selecciona <span>Productos</span>.</p>
                <p>Elige la opción <span>Reservas</span>.</p>
            </div>

            <div className='bookingHelpC'>
                <img src={imagesHelp.pbYourBooking} alt="img" />
            </div>

            <div className='bookingHelp1'>
                <p>Verás una tabla con tus reservas. La tabla incluye:</p>
                <p><span>Imagen del producto</span>.</p>
                <p><span>Nombre del producto</span>.</p>
                <p><span>Fecha en que realizaste la reserva</span>.</p>
                <p>Un botón <span>Ver</span> que te mostrará más detalles del producto y su estado.</p>
                <p>Si decides desactivar la reserva, recuerda que estarás cancelando la misma.</p>
            </div>

            <div className='bookingHelpB'>
                <img src={imagesHelp.pbBookinPanel} alt="img" />
            </div>

            <div className='bookingHelp1'>
                <h3>Para vendedores</h3>
                <p>Si eres un vendedor, también accede a tu panel de administración y selecciona <span>Productos</span> - <span>Reservas</span>, pero esta vez elige <span>Te reservaron</span>. Ahí verás una lista de tus productos de merchandising que han sido reservados. La tabla muestra:</p>
                <p><span>Imagen del producto</span>.</p>
                <p><span>Nombre del producto</span>.</p>
                <p>Un botón <span>Ver</span> para obtener más detalles.</p>
                <p><span>Número de reservas</span>.</p>
                <p>Al hacer clic en el número de reservas, podrás ver una lista de las personas que han reservado tu producto. No te preocupes, nosotros nos encargamos de notificarles cuando el producto esté disponible para su compra.</p>
            </div>

            <div className='bookingHelpD'>
                <img src={imagesHelp.pbYouAreBooking} alt="img" />
                <img src={imagesHelp.pbWhoAreTYouBooking} alt="img" />
            </div>

            <div className='bookingHelp1'>
                <h3>¿Cómo agregar stock?</h3>
                <p>Agregar stock es muy sencillo:</p>
                <p>Dentro del panel <span>Productos</span>, haz clic en <span>Ver</span>.</p>
                <p>Verás tu lista de productos. Si este no tiene stock, la casilla correspondiente estará vacía.</p>
                <p>Ingresa la nueva cantidad de stock y haz clic en cualquier parte de la pantalla para que se actualice automáticamente.</p>
                <p>Una vez hecho esto, si hay reservas activas, notificaremos a los usuarios que el producto ya está disponible para la compra.</p>
            </div>

            <div className='bookingHelpB'>
                <img src={imagesHelp.pbProductStock} alt="img" />
            </div>

            <div className='bookingHelp2'>
                <UnderMarketLog size={3} />
                <p>Gracias por utilizar el módulo <strong>UnderMarket</strong> de <strong>UnderPass</strong>.</p>
            </div>

        </div>
    );
};

export default BookingHelp;