import { useEffect } from "react";
import VideoSities from "./VideoSities/VideoSities";

const SiteVideo = ({ values, setValues }) => {

    useEffect(() => {
        if (values.category === 'premises') localStorage.setItem('to', 'shifts');
        else localStorage.setItem('to', 'end');
        setValues({ ...values, post: 'video' });
    }, []);

    return (
        <>
            {values.subcategory === 'filmaker' && <p>Filmaker</p>}

            {values.category === 'stream' && <p>Stream</p>}

            {values.category !== 'stream' && values.subcategory !== 'filmaker' &&
                <VideoSities values={values} setValues={setValues} />
            }
        </>
    );
};

export default SiteVideo;