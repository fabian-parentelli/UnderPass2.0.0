import './avatarUser.scss';
import Title from '../../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../../context/LoginContext';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SelectedAvatar from '../../../../component/avatars/SelectedAvatar/SelectedAvatar';

const AvatarUser = () => {

    const { user } = useLoginContext();

    return (
        <div className='avatarUser'>
            <Title Icon={SupervisedUserCircleIcon} name='Avatares' goTo='/help#avatarHelp' />
            <SelectedAvatar user={user.data} />
        </div>
    );
};

export default AvatarUser;