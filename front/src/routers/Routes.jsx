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
import NewProduct from "../componentSite/product/NewProduct/NewProduct.jsx";
import TheMarket from "../componentSite/product/TheMarket/TheMarket.jsx";
import VewTheProduct from "../componentSite/product/VewTheProduct/VewTheProduct.jsx";
import BodyCart from "../componentSite/cart/BodyCart/BodyCart.jsx";
import UnderPay from "../componentSite/pay/UnderPay/UnderPay.jsx";
import TransferPay from "../componentSite/pay/transfer/TransferPay/TransferPay.jsx";
import SellerOrders from "../componentSite/alerts/SellerOrders/SellerOrders.jsx";
import TicketUnique from "../component/pay/TicketUnique/TicketUnique.jsx";
import VewAlertsBody from "../componentSite/alerts/VewAlertsBody/VewAlertsBody.jsx";
import VewTransferPay from "../component/transfer/VewTransferPay/VewTransferPay.jsx";
import UniqueNews from "../componentSite/news/UniqueNews/UniqueNews.jsx";
import UnderNews from "../componentSite/news/UnderNews/UnderNews.jsx";
import NewEvent from "../componentSite/events/NewEvent/NewEvent.jsx";
import UnderEvent from "../componentSite/events/UnderEvent/UnderEvent.jsx";
import EventPage from "../componentSite/events/EventPage/EventPage.jsx";
import VewStream from "../componentSite/stream/VewStream/VewStream.jsx";
import Drawer from "../componentSite/drawer/Drawer/Drawer.jsx";
import Sites from "../componentSite/sites/Sites/Sites.jsx";
import NewSites from "../component/sites/NewSites/NewSites.jsx";
import SitePage from "../componentSite/sites/SitePage/SitePage.jsx";
import AllSites from "../componentSite/sites/AllSites/AllSites.jsx";
import Advances from "../componentSite/advances/Advances/Advances.jsx";
import ShiftPage from "../componentSite/shift/ShiftPage/ShiftPage.jsx";
import ShiftAll from "../componentSite/shift/ShiftAll/ShiftAll.jsx";

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
                    <Route path="/newproduct" element={<NewProduct />} />
                    <Route path="/themarket" element={<TheMarket />} />
                    <Route path="/product/:id" element={<VewTheProduct />} />
                    <Route path="/uniquenews/:id" element={<UniqueNews />} />
                    <Route path="/undernews" element={<UnderNews />} />
                    <Route path="/newevent" element={<NewEvent />} />
                    <Route path="/event" element={<UnderEvent />} />
                    <Route path="/eventpage/:id" element={<EventPage />} />
                    <Route path="/stream/:id/:channel" element={<VewStream />} />
                    <Route path="/sites" element={<Sites />} />
                    <Route path="/site/:link" element={<SitePage />} />
                    <Route path="/allsites" element={<AllSites />} />
                    <Route path="/advance" element={<Advances />} />
                    <Route path="/shift/:sid" element={<ShiftPage />} />
                    <Route path="/shift/all" element={<ShiftAll />} />

                    {user.logged &&
                        <>
                            <Route path="/profile/*" element={<Profile />} />
                            <Route path="/underpay/:type/:id" element={<UnderPay />} />
                            <Route path="/transfer/:id" element={<TransferPay />} />
                            <Route path="/order/:id" element={<SellerOrders />} />
                            <Route path="/vewtransferpay/:id" element={<VewTransferPay />} />
                            <Route path="/ticket_by_order/:id" element={<TicketUnique />} />
                            <Route path="/vewalert/:type/:id" element={<VewAlertsBody />} />
                            <Route path="/newsites" element={<NewSites />} />
                        </>
                    }

                    {user.logged && user.data && (user.data.role === 'admin' || user.data.role === 'master') &&
                        <Route path="/dashboard/*" element={<Dashboard />} />
                    }
                </Routes>

                {user.logged && <Drawer />}
                <BodyCart />
                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default RoutesComp;