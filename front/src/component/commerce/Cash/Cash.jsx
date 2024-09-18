import './cash.scss';
import UnderMoney from '../../pay/UnderMoney/UnderMoney';

const Cash = ({ userId, setIsUnderPay }) => {

    return (
        <div className='cash'>
            <p>Under<span>Pay</span></p>
            <UnderMoney userId={userId} setIsUnderPay={setIsUnderPay} />
        </div>
    );
};

export default Cash;