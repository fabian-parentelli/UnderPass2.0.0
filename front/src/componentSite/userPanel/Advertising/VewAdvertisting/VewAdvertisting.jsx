import { useLoginContext } from "../../../../context/LoginContext";
import VewAllAdvertisting from "../../../../component/advertisting/VewAllAdvertisting/VewAllAdvertisting";

const VewAdvertisiting = () => {

    const { user } = useLoginContext();

    return (
        <div style={{ marginTop: '1rem' }}>
            {user && user.data && user.data._id && <VewAllAdvertisting id={user.data._id} />}
        </div>
    );
};

export default VewAdvertisiting;