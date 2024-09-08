import './cash.scss';
import UnderMoney from '../../pay/UnderMoney/UnderMoney';

const Cash = () => {

    return (
        <div className='cash'>
            <p>Under<span>Pay</span></p>
            <UnderMoney />
        </div>
    );
};

export default Cash;