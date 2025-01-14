import './codeNull.scss';
import UnderPassLog from '../../../../../component/fonts/UnderPassLog/UnderPassLog';

const CodeNull = () => {

    return (
        <div className='codeNull'>
            <h2>Información del código</h2>
            <p>Funciones, métodos, objetos</p>

            <div>
                <UnderPassLog size={3} />
            </div>
        </div>
    );
};

export default CodeNull;