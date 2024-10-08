import './userHelp.scss';
import RegisterHelp from './RegisterHelp/RegisterHelp.jsx';
import LoginHelp from './LoginHelp/LoginHelp.jsx';
import SearchHelp from '../SearchHelp/SearchHelp.jsx';
import RecoverPassHelp from './RecoverPassHelp/RecoverPassHelp.jsx';
import WantBannerHelp from './WantBannerHelp/WantBannerHelp.jsx';
import YourDataHelp from './YourDataHelp/YourDataHelp.jsx';
import AvatarHelp from './AvatarHelp/AvatarHelp.jsx';

const UserHelp = () => {

    return (
        <div className='userHelp' id='userHelp'>
            <div className='userHelpHeader'>
                <h4>Usuarios</h4>
                <SearchHelp />
            </div>
            <RegisterHelp />
            <LoginHelp />
            <RecoverPassHelp />
            <YourDataHelp />
            <WantBannerHelp />
            <AvatarHelp />
        </div>
    );
};

export default UserHelp;