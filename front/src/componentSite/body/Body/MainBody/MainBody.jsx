import SubNav from "../../SubNav/SubNav";
import { useLoginContext } from "../../../../context/LoginContext";
import BannerBody from "../../BannerBody/BannerBody";
import BodyProduct from "../../BodyProduct/BodyProduct";
import BodyNews from "../../BodyNews/BodyNews";

const MainBody = () => {

    const { user } = useLoginContext();

    return (
        <>
            {user.logged && <SubNav />}
            <BannerBody />
            <BodyProduct />
            <BodyNews />
        </>
    );
};

export default MainBody;