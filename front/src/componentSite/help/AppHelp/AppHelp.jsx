import SearchHelp from "../SearchHelp/SearchHelp";
import ApplicationHelp from "./ApplicationHelp/ApplicationHelp";
import NewProductHelp from "./NewProductHelp/NewProductHelp";
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
            <PublicityHelp />
            <ApplicationHelp />
            <PublicityVewHelp />
        </div>
    );
};

export default AppHelp;