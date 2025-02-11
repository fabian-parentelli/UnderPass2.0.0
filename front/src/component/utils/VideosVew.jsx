import { useEffect, useState } from "react";

const VideosVew = ({ url, isPlaying = false }) => {

    const [embedCode, setEmbedCode] = useState('');

    useEffect(() => {
        if (url) {
            const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(regExp);
            setEmbedCode(match && match[1]);
        }
    }, [url]);

    return (
        <>
            {embedCode && (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${embedCode}${isPlaying ? '?autoplay=1' : ''}`}
                    style={{ border: "none" }}
                    allow="autoplay"
                    allowFullScreen
                ></iframe>
            )}
        </>
    );
};

export default VideosVew;