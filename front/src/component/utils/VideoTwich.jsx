import { useEffect, useState } from "react";

const VideoTwich = ({ url }) => {

    const [embedChannel, setEmbedChannel] = useState('');

    useEffect(() => {
        if (url) {
            const regExp = /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/;
            const match = url.match(regExp);
            setEmbedChannel(match && match[1]);
        }
    }, [url]);

    return (
        <>
            {embedChannel && (
                <iframe
                    src={`https://player.twitch.tv/?channel=${embedChannel}&parent=example.com`}
                    width="100%"
                    height="100%"

                    allowFullScreen
                ></iframe>
            )}
        </>
    );
};

export default VideoTwich;
