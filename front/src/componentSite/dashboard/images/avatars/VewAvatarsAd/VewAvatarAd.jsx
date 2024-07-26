import { useState } from "react";
import Load from "../../../../../component/utils/Load";
import VewAvatars from "../../../../../component/avatars/VewAvatars/VewAvatars";
import { updActiveAvatarApi } from "../../../../../helpers/images/avatars/updActiveAvatar.api";

const VewAvatarAd = () => {

    const [loading, setLoading] = useState(false);
    const [change, setChange] = useState(false);

    const handleSet = async (id) => {
        setLoading(true);
        const reponse = await updActiveAvatarApi(id);
        if(reponse.status === 'success') setChange(!change);
        else console.log(reponse);
        setLoading(true);
    };

    return (
        <div style={{ marginTop: '1rem' }}>
            <VewAvatars type='admin' setLoading={setLoading} handleSet={handleSet} change={change} />
            <Load loading={loading} />
        </div>
    );
};

export default VewAvatarAd;