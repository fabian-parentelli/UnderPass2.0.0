import './commerceHome.scss';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Title from '../../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../../context/LoginContext';
import Commerce from '../../../../component/commerce/Commerce/Commerce';

const CommerceHome = () => {

    const { user } = useLoginContext();

    return (
        <div className='commerceHome'>
            <Title Icon={ListAltIcon} name='Ordenes' goTo='/help#orderBuyHelp' />
            <Commerce user={user.data} />
        </div>
    );
};

export default CommerceHome;