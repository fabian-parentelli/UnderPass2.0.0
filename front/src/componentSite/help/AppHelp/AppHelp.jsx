import SearchHelp from "../SearchHelp/SearchHelp";
import NewProductHelp from "./NewProductHelp/NewProductHelp";
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
        </div>
    );
};

export default AppHelp;