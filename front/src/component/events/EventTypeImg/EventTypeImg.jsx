import './eventTypeImg.scss';

const EventTypeImg = ({ card }) => {

    const date = new Date(card.startDate);
    const day = date.toLocaleDateString('en-GB', { day: '2-digit', timeZone: 'UTC' });
    const month = date.toLocaleDateString('es-ES', { month: 'short', timeZone: 'UTC' });

    return (
        <>
            {card.photo && !card.photo.isPreset
                ? <img src={card.photo.img} alt="img" />
                : <div className='eventTypeImg'>
                    <img src={card.photo.presetId.img} alt="img" />

                    <div className={`eventTypeImgDiv ${card.photo.presetId.name}`}>
                        <h3>{card.title}</h3>
                        <p className='eventTypeImgCategory'>{getCategory(card.category)}</p>
                        <p className='eventTypeImgLocation'>{(card?.location?.city || 'Ciudad')} - {(card?.location?.province || 'Provincia')}</p>
                        {!card.minors
                            ? <img className='minors' src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1728683588/images/gqdohvswtpihjshbvcwk.png" alt="img" />
                            : <p>Apto todo público</p>
                        }
                        <div className='eventTypeImgTime'>
                            <p>{day}{month}</p>
                            <p>{card.startHour}</p>
                        </div>
                    </div>

                </div>
            }
        </>
    );
};

export default EventTypeImg;

function getCategory(types) {
    const category = {
        'concert': () => 'Concierto',
        'theater': () => 'Teatro',
        'filmmaker': () => 'Filmmaker',
        'standup': () => 'Stand Up',
        'conference': () => 'Conferencia',
        'art': () => 'Artística',
        'dance': () => 'Danza',
    };
    return category[types] ? category[types]() : types;
};