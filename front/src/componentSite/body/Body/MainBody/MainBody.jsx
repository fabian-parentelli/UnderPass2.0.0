import SubNav from "../../SubNav/SubNav";
import { useLoginContext } from "../../../../context/LoginContext";

const MainBody = () => {

    const { user } = useLoginContext();

    return (
        <>
            {user.logged && <SubNav />}
            <img
            style={{width: '100%'}}
            src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720551036/banners/tw5go9rmriohipdmlwvg.png" alt="img" />
        </>
    );
};

export default MainBody;