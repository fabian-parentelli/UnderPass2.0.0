import './userHelp.scss';
import RegisterHelp from './RegisterHelp/RegisterHelp.jsx';
import LoginHelp from './LoginHelp/LoginHelp.jsx';
import SearchHelp from '../SearchHelp/SearchHelp.jsx';
import RecoverPassHelp from './RecoverPassHelp/RecoverPassHelp.jsx';
import WantBannerHelp from './WantBannerHelp/WantBannerHelp.jsx';

const UserHelp = () => {

    return (
        <div className='userHelp'>
            <div className='userHelpHeader'>
                <h4 id='userHelp'>Usuarios</h4>
                <SearchHelp />
            </div>
            <RegisterHelp />
            <LoginHelp />
            <RecoverPassHelp />
            <WantBannerHelp />
        </div>
    );
};

export default UserHelp;