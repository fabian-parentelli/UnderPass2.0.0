import Alerts from '../../body/SubNav/Alerts/Alerts';
import AlertProfile from './AlertProfile/AlertProfile';
import './panelProfile.scss';
import WantTo from './WantTo/WantTo';

const PanelProfile = ({ user }) => {

    return (
        <div className='panelProfile'>
            <div className='panProUser'>
                <div className='dimg'>
                    {user && <img src={user.avatar[0]} className='panProImg' alt="avatar" />}
                </div>
                <div className='panProTitle'>
                    <h2>Panel de administracion</h2>
                    {user && <p>Hola! {user.name}</p>}
                    <div className='line'></div>
                </div>
            </div>

            <AlertProfile user={user} />
            <WantTo />
        </div>
    );
};

export default PanelProfile;