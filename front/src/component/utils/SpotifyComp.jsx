
const SpotifyComp = ({ url }) => {

    const trackId = url ? url.match(/\/track\/(\w+)/)?.[1] : null;

    return (
        <>
            {url &&
                <iframe
                    style={{ borderRadius: '12px', marginTop: '0' }}
                    src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            }
        </>
    );
};

export default SpotifyComp;