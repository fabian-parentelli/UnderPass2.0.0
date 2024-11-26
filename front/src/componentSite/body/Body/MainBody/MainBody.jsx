import SubNav from "../../SubNav/SubNav";
import BodyNews from "../../BodyNews/BodyNews";
import BannerBody from "../../BannerBody/BannerBody";
import BodyProduct from "../../BodyProduct/BodyProduct";
import { useLoginContext } from "../../../../context/LoginContext";
import BodyEvents from "../../BodyEvents/BodyEvents";
import NewsSeparator from "../../NewsSeparator/NewsSeparator";
import BodyShifts from "../../BodyShifts/BodyShifts";
import BodySite from "../../BodySite/BodySite";
import BodyFooter from "../../BodyFooter/BodyFooter";
import BodyTitles from "../../BodyTitles/BodyTitles";

const MainBody = () => {

    const { user } = useLoginContext();

    return (
        <>
            {user.logged && <SubNav />}
            <BannerBody />
            <BodyTitles />

            <BodyEvents />
            <NewsSeparator start={1} end={2} />

            <BodyProduct />
            <NewsSeparator start={3} end={4} />

            <BodySite />
            <NewsSeparator start={5} end={6} />

            <BodyShifts />
            <BodyNews />

            <BodyFooter />
        </>
    );
};

export default MainBody;