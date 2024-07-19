import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../component/utils/ScrollToTop.jsx";
import { useLoginContext } from "../context/LoginContext.jsx";
import NavBar from "../componentSite/NavBar/NavBar.jsx";
import Footer from "../componentSite/Footer/Footer.jsx";
import Body from "../componentSite/body/Body/Body.jsx";
import Register from "../componentSite/user/Register/Register.jsx";
import Login from "../componentSite/user/Login/Login.jsx";
import Dashboard from "../componentSite/dashboard/Dashboard/Dashboard.jsx";
import WhatEmail from "../componentSite/user/WhatEmail/WhatEmail.jsx";
import NewPassword from "../componentSite/user/NewPassword/NewPassword.jsx";
import Helps from "../componentSite/help/Helps/Helps.jsx";
import VideoHelp from "../componentSite/help/VideoHelp/VideoHelp.jsx";
import Profile from "../componentSite/userPanel/Profil/Profil.jsx";
import BannerWant from "../componentSite/BannerWant/BannerWant.jsx";
import VewCart from "../componentSite/cart/VewCart/VewCart.jsx";

const RoutesComp = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/what_email" element={<WhatEmail />} />
                    <Route path="/password/:token" element={<NewPassword />} />
                    <Route path="/help" element={<Helps />} />
                    <Route path="/videohelp/:tutorial" element={<VideoHelp />} />
                    <Route path="/bannerwant" element={<BannerWant />} />
                    <Route path="/cart" element={<VewCart />} />

                    {user.logged &&
                        <>
                            <Route path="/profile/*" element={<Profile />} />
                        </>
                    }

                    {user.logged && user.data && (user.data.role === 'admin' || user.data.role === 'master') &&
                        <Route path="/dashboard/*" element={<Dashboard />} />
                    }
                </Routes>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RoutesComp;