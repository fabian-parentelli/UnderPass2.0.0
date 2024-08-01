import SubNav from "../../SubNav/SubNav";
import { useLoginContext } from "../../../../context/LoginContext";
import BannerBody from "../../BannerBody/BannerBody";
import BodyProduct from "../../BodyProduct/BodyProduct";

const MainBody = () => {

    const { user } = useLoginContext();

    return (
        <>
            {user.logged && <SubNav />}
            <BannerBody />
            <BodyProduct />
        </>
    );
};

export default MainBody;