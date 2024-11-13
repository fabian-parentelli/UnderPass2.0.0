import './sitesPanel.scss';
import ComputerIcon from '@mui/icons-material/Computer';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext';
import SitePanal from '../../../component/sites/sitePanel/SitePanel/SitePanal';

const SitesPanel = () => {

    const { user } = useLoginContext();

    return (
        <div className='sitesPanel'>
            <Title Icon={ComputerIcon} name='Sitio' goTo={'/help'} />
            <SitePanal userId={user.data._id} />
        </div>
    );
};

export default SitesPanel;