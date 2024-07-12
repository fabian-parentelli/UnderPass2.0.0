import './profile.scss';
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { useLoginContext } from "../../../context/LoginContext";
import UserMenu from '../UserMenu/UserMenu';
import PanelProfile from '../PanelProfile/PanelProfile';

const Profile = () => {

    const { user, current } = useLoginContext();
    useEffect(() => { current() }, []);

    return (
        <div className="profile">
            <UserMenu />
            <Routes>
                <Route path='/' element={<PanelProfile user={user.data} />} />
            </Routes>
        </div>
    );
};

export default Profile;