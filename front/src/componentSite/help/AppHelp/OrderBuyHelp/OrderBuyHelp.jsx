import './orderBuyHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp.jsx';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';

const OrderBuyHelp = () => {

    return (
        <div id='orderBuyHelp'>
            
            <TitleHelp
                title='Ordenes de compra'
                paragraph='Por cada compra que hagas (producto, evento, turno), se hace una orden de compra.'
                goTo='orderBuyHelp'
            />

            <div className='orderBuyHelpImg'>
                <img src={imagesHelp.orderBuyImg1} alt="img" />
                <img src={imagesHelp.orderBuyImg2} alt="img" />
            </div>

            <div className='orderBuyHelpText1'>
                <p>En el panel de administración, en la parte izquierda, encontrarás un ítem llamado <strong>"Órdenes"</strong>. Al hacer clic en él, se abrirá una ventana donde podrás ver, en primera instancia, tu saldo <strong>"UnderPay"</strong>, que es el saldo disponible en la billetera de la plataforma.</p>
                <p>Luego, tendrás la opción de elegir qué tipo de órdenes quieres ver: <strong>compras</strong> o <strong>ventas</strong>. Ten en cuenta que todas las compras que realices, ya sea de eventos, productos, turnos o publicidades, se agregarán a esta sección. Allí se detallará el estado de pago, entrega y comunicación.</p>
            </div>

            <div className='orderBuyHelpImg2'>
                <img src={imagesHelp.orderBuyImg3} alt="img" />
            </div>

            <div className='orderBuyHelpText5'>
                <div className='orderBuyHelpText5Div'>
                    <p>Podrás filtrar las órdenes <strong>pagadas</strong> o <strong>no pagadas</strong>. Recuerda que las compras se consideran pagadas de inmediato si usas Mercado Pago o el saldo de tu billetera UnderPay. Sin embargo, si realizas una transferencia bancaria, esta puede tardar hasta 48 horas hábiles para ser confirmada por nuestro equipo.</p>

                    <p>En la tabla de órdenes verás lo siguiente:</p>
                    <ul>
                        <li><strong>Ítem:</strong> Al hacer clic en el ítem, verás una lista de todas tus compras.</li>
                        <li><strong>Fecha de compra:</strong> Indica cuándo realizaste la compra.</li>
                        <li><strong>ID o número de orden:</strong> Es el identificador único de tu compra.</li>
                        <li><strong>Estado de pago:</strong> Muestra si el pago está confirmado ("Sí") o no. Si está confirmado, también se indicará la fecha y el método de pago (transferencia, UnderPay o Mercado Pago). Si el pago aún no se ha acreditado, aparecerá como "No".</li>
                        <li><strong>Total de la orden:</strong> Indica el monto total de la compra.</li>
                        <li><strong>Estado activo:</strong> Si una orden está activa, pero decides desactivarla, esta se eliminará y la compra se cancelará, volviendo todo atrás.</li>
                    </ul>

                    <p>Además, si el pago está confirmado, podrás hacer clic en el apartado de <strong>"Pago"</strong> para ver el comprobante que genera la plataforma. Este no tiene valor fiscal, pero sirve como recibo de pago.</p>
                </div>
                <img src={imagesHelp.orderBuyImg4} alt="img" />
            </div>
        </div>
    );
};

export default OrderBuyHelp;