import SubNav from "../../SubNav/SubNav";
import { useLoginContext } from "../../../../context/LoginContext";
import BannerBody from "../../BannerBody/BannerBody";

const MainBody = () => {

    const { user } = useLoginContext();

    return (
        <>
            {user.logged && <SubNav />}
            <BannerBody />
        </>
    );
};

export default MainBody;