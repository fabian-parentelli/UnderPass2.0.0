import './productPanel.scss';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Title from '../../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../../context/LoginContext';
import SelectedProd from '../../../../component/products/SelectedProd/SelectedProd';
import IsFinancialData from '../../../../component/user/IsFinancialData/IsFinancialData';

const ProductPanel = () => {

    const { user } = useLoginContext();

    return (
        <div className='productPanel'>
            <Title Icon={CheckroomIcon} name='Tus Productos' goTo='/help#vewProductHelp' />
            {user && user.data && !user.data.financeData
                ? <IsFinancialData setPath='profile/productmenu' />
                : <SelectedProd userId={user.data._id} />
            }
        </div>
    );
};

export default ProductPanel;