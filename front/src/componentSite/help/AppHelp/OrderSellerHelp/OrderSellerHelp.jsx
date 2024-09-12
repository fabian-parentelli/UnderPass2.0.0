import './orderSellerHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';

const OrderSellerHelp = () => {

    return (
        <div id='orderSellerHelp'>

            <TitleHelp
                title='Ordenes de venta'
                paragraph='Por cada compra que te hagan se genera una orden de venta.'
                goTo='orderSellerHelp'
            />

            <div className='orderSellerHelpImg'>
                <img src={imagesHelp.orderBuyImg1} alt="img" />
                <img src={imagesHelp.orderSellerImg1} alt="img" />
            </div>

            <div className='orderSellerHelpText3'>
                <p>En el menú de administración del usuario, a la izquierda encontrarás la opción <strong>Órdenes</strong>. Al hacer clic en esta opción, verás un ícono de <strong>UnderPay</strong>, que muestra el saldo disponible en tu billetera dentro de la plataforma. Luego, selecciona el botón <strong>Ventas</strong> para visualizar una tabla con las órdenes. A continuación, te explicamos cómo interpretar la información presentada:</p>
                <ol>
                    <li><strong>Ver:</strong>
                        <ul>
                            <li>Te muestra la cantidad de ítems que contiene la orden, ya sean productos, eventos, turnos o publicidades.</li>
                            <li>Si haces clic en esta opción, podrás ver el detalle de estos ítems.</li>
                        </ul>
                    </li>
                    <li><strong>Fecha:</strong>
                        <p>Indica la fecha en que se creó la orden, que corresponde al momento en que el cliente realizó la compra.</p>
                    </li>
                    <li><strong>Pagado:</strong>
                        <ul>
                            <li>Muestra si el cliente ha confirmado el pago de la orden.</li>
                            <li>Si dice "No", significa que el cliente aún no ha realizado el pago.</li>
                            <li>Si dice "Sí", verás la fecha en que se efectuó el pago.</li>
                        </ul>
                    </li>
                    <li><strong>Acreditado:</strong>
                        <ul>
                            <li>Indica si el monto correspondiente ha sido transferido desde <strong>UnderPass</strong> a <strong>UnderPay</strong> (la billetera de la plataforma).</li>
                            <li>Si dice "No", aún no se ha realizado la transferencia.</li>
                            <li>Si dice "Sí", verás también la fecha de la transferencia.</li>
                            <li>Al hacer clic en el "Sí", se abrirá un modal con el <strong>ticket</strong> (recibo) que la plataforma te proporciona.</li>
                        </ul>
                    </li>
                    <li><strong>Cobrado:</strong>
                        <ul>
                            <li>Indica si has recibido el dinero en tu cuenta bancaria.</li>
                            <li>Si ya has cobrado, aparecerá "Sí" y la fecha del cobro.</li>
                            <li>Si aún no lo has recibido, o si decides mantener el saldo en la billetera generando rendimientos, dirá "No".</li>
                        </ul>
                    </li>
                    <li><strong>N° de Orden:</strong>
                        <p>Este campo muestra el número único de identificación de la orden.</p>
                    </li>
                    <li><strong>Total:</strong>
                        <p>Es el monto total que te corresponde recibir por la venta.</p>
                    </li>
                    <li><strong>Activo:</strong>
                        <p>Si el cliente decide desactivar la compra, aquí se reflejará que la orden de venta está desactivada.</p>
                    </li>
                    <li><strong>Comunicarte con el cliente:</strong>
                        <p>Tendrás la posibilidad de comunicarte con el cliente a través de un chat habilitado en la plataforma.</p>
                    </li>
                </ol>

                <p>Con esta guía, podrás entender mejor la información disponible en tus órdenes de venta y gestionar tus transacciones de forma más efectiva en la plataforma.</p>
            </div>
        </div>
    );
};

export default OrderSellerHelp;