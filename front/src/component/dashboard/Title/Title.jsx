import './title.scss';
import { Link } from 'react-router-dom';
import Today from '../../utils/Today/Today';
import Exchange from '../../utils/Exchange/Exchange';
import { useLoginContext } from '../../../context/LoginContext';

const Title = ({ Icon, name, goTo }) => {

    const { user } = useLoginContext();

    return (
        <div className='title'>
            <div className='titleCont'>
                <div>
                    <Icon className='titleIcon' />
                    <h2>{name}</h2>
                </div>
                <div>
                    <Today />
                    {user && user.data.role !== 'user' && <Exchange />}
                    {user && user.data.role == 'user' && 
                        <Link to={goTo} className='help'>Ayuda</Link> 
                    }
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
};

export default Title;