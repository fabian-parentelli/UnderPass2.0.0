import './preAvatar.scss';
import { useState } from "react";
import Load from "../../utils/Load";
import VewAvatars from "../VewAvatars/VewAvatars";
import { updAvatarUserApi } from '../../../helpers/users/updAvatarUser.api';
import { useLoginContext } from '../../../context/LoginContext';

const PreAvatar = ({ id, setImage }) => {

    const [loading, setLoading] = useState(false);
    const { current } = useLoginContext();

    const handleSet = async (avatar) => {
        setLoading(true);
        const response = await updAvatarUserApi(id, { img: avatar });
        if (response.status === 'success') {
            if (response.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
            } else {
                setImage(response.result.avatar[0]);
            };
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className="preAvatar">
            <VewAvatars type='user' setLoading={setLoading} handleSet={handleSet} />
            <Load loading={loading} />
        </div>
    );
};

export default PreAvatar;