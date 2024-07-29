import SearchHelp from "../SearchHelp/SearchHelp";
import NewProductHelp from "./NewProductHelp/NewProductHelp";

const AppHelp = () => {

    return (
        <div className='userHelp' id="appHelp">
            <div className='userHelpHeader'>
                <h4>Plataforma</h4>
                <SearchHelp />
            </div>

            <NewProductHelp />
        </div>
    );
};

export default AppHelp;