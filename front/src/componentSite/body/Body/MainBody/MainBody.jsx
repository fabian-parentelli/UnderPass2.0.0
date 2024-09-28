import SubNav from "../../SubNav/SubNav";
import BodyNews from "../../BodyNews/BodyNews";
import BannerBody from "../../BannerBody/BannerBody";
import BodyProduct from "../../BodyProduct/BodyProduct";
import { useLoginContext } from "../../../../context/LoginContext";
import BodyEvents from "../../BodyEvents/BodyEvents";
import NewsSeparator from "../../NewsSeparator/NewsSeparator";

const MainBody = () => {

    const { user } = useLoginContext();

    return (
        <>
            {user.logged && <SubNav />}
            <BannerBody />

            <BodyEvents text={'Eventos'} />
            <NewsSeparator start={1} end={2} />

            <BodyProduct />
            <NewsSeparator start={3} end={4} />

            <BodyEvents text={'Sitios'} />
            <NewsSeparator start={5} end={6} />

            <BodyEvents text={'Turnos'} />
            <BodyNews />
        </>
    );
};

export default MainBody;