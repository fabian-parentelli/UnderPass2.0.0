import { useLoginContext } from "../../../../context/LoginContext";
import FormWantBanner from "../../../../component/banner/FormWantBanner/FormWantBanner";

const NewAdvertising = ({ type }) => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');

    return (
        <>
            {user && country && type === 'Banner' && <FormWantBanner user={user.data} country={country} />}
        </>
    );
};

export default NewAdvertising;