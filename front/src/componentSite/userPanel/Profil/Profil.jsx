import './profile.scss';
import { useEffect } from "react";
import UserMenu from '../UserMenu/UserMenu';

import { Route, Routes } from 'react-router-dom';
import PanelProfile from '../PanelProfile/PanelProfile';
import { useLoginContext } from "../../../context/LoginContext";
import Advertising from '../Advertising/Advertising';
import DataUser from '../DataUser/DataUser';
import AvatarUser from '../avatars/AvatarUser/AvatarUser';
import ProductPanel from '../product/ProductPanel/ProductPanel';
import AlertProfil from '../AlertProfil/AlertProfil';
import CommerceHome from '../commerce/CommerceHome/CommerceHome';
import Wallet from '../Wallet/Wallet';

const Profile = () => {

    const { user, current } = useLoginContext();
    useEffect(() => { current() }, []);

    return (
        <div className="profile">
            <UserMenu />
            <Routes>
                <Route path='/' element={<PanelProfile user={user.data} />} />
                <Route path='/datauser' element={<DataUser />} />
                <Route path='/panelavatar' element={<AvatarUser />} />
                <Route path='/advertising' element={<Advertising />} />
                <Route path='/productmenu' element={<ProductPanel />} />
                <Route path='/alerts' element={<AlertProfil />} />
                <Route path='/commerce_home' element={<CommerceHome />} />
                <Route path='/wallet' element={<Wallet />} />
            </Routes>
        </div>
    );
};

export default Profile;