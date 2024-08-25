import './commerceHome.scss';
import Title from '../../../../component/dashboard/Title/Title';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useLoginContext } from '../../../../context/LoginContext';
import Commerce from '../../../../component/commerce/Commerce/Commerce';

const CommerceHome = () => {

    const { user } = useLoginContext();

    return (
        <div className='commerceHome'>
            <Title Icon={MonetizationOnIcon} name='Comercio' goTo='/help' />
            <Commerce user={user.data} />
        </div>
    );
};

export default CommerceHome;