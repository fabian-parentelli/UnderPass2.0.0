import SearchHelp from "../SearchHelp/SearchHelp";
import ApplicationHelp from "./ApplicationHelp/ApplicationHelp";
import BookingHelp from "./BookingHelp/BookingHelp";
import NewEventHelp from "./NewEventHelp/NewEventHelp";
import NewProductHelp from "./NewProductHelp/NewProductHelp";
import OrderBuyHelp from "./OrderBuyHelp/OrderBuyHelp";
import OrderSellerHelp from "./OrderSellerHelp/OrderSellerHelp";
import PublicityHelp from "./PublicityHelp/PublicityHelp";
import PublicityVewHelp from "./PublicityVewHelp/PublicityVewHelp";
import VewProductHelp from "./VewProductHelp/VewProductHrlp";

const AppHelp = () => {

    return (
        <div className='userHelp' id="appHelp">
            <div className='userHelpHeader'>
                <h4>Plataforma</h4>
                <SearchHelp />
            </div>

            <NewProductHelp />
            <VewProductHelp />
            <BookingHelp />
            <PublicityHelp />
            <ApplicationHelp />
            <PublicityVewHelp />
            <OrderBuyHelp />
            <OrderSellerHelp />
            <NewEventHelp />
        </div>
    );
};

export default AppHelp;