import './cash.scss';
import UnderMoney from '../../pay/UnderMoney/UnderMoney';

const Cash = ({ userId }) => {

    return (
        <div className='cash'>
            <p>Under<span>Pay</span></p>
            <UnderMoney userId={userId} />
        </div>
    );
};

export default Cash;