import './newSiteButtom.scss';
import GroupsIcon from '@mui/icons-material/Groups';
import VideocamIcon from '@mui/icons-material/Videocam';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const NewSiteButtom = ({ vew, setVew, values }) => {

    return (
        <div className='newSiteButtom'>

            <div onClick={() => setVew('portal')} style={{ color: vew === 'portal' ? '#058d4d' : '' }}>
                <ImportantDevicesIcon className='siteUpdateIcon' />
                <p>Portada</p>
            </div>

            <div onClick={() => setVew('events')} style={{ color: vew === 'events' ? '#058d4d' : '' }}>
                <TheaterComedyIcon />
                <p>Eventos</p>
            </div>

            <div onClick={() => setVew('description')} style={{ color: vew === 'description' ? '#058d4d' : '' }}>
                <DescriptionIcon />
                <p>Descripción</p>
            </div>

            <div onClick={() => setVew('socialMedia')} style={{ color: vew === 'socialMedia' ? '#058d4d' : '' }}>
                <ConnectWithoutContactIcon />
                <p>Redes s.</p>
            </div>

            {values?.category === 'art' &&
                (values?.subCategory === 'musicalGroup' || values?.subCategory === 'play' ||
                    values?.subCategory === 'danceGroup'
                    ? <div onClick={() => setVew('cast')} style={{ color: vew === 'cast' ? '#058d4d' : '' }}>
                        <GroupsIcon />
                        <p>Elenco</p>
                    </div>
                    : <div onClick={() => setVew('cast')} style={{ color: vew === 'cast' ? '#058d4d' : '' }}>
                        <AccessibilityIcon />
                        <p>Persona</p>
                    </div>
                )
            }

            {values?.category === 'stream' &&
                (values?.subCategory === 'lives' || values?.subCategory === 'documentals' ||
                    values?.subCategory === 'publications'
                    ? <div onClick={() => setVew('cast')} style={{ color: vew === 'cast' ? '#058d4d' : '' }}>
                        <GroupsIcon />
                        <p>Elenco</p>
                    </div>
                    : <div onClick={() => setVew('cast')} style={{ color: vew === 'cast' ? '#058d4d' : '' }}>
                        <AccessibilityIcon />
                        <p>Persona</p>
                    </div>
                )
            }

            {(values?.subCategory === 'musicalGroup' || values?.subCategory === 'solist') &&
                <div onClick={() => setVew('discography')} style={{ color: vew === 'discography' ? '#058d4d' : '' }}>
                    <GraphicEqIcon />
                    <p>Discografía</p>
                </div>
            }

            <div onClick={() => setVew('products')} style={{ color: vew === 'products' ? '#058d4d' : '' }}>
                <ShoppingBagIcon />
                <p>Productos</p>
            </div>

            <div onClick={() => setVew('galery')} style={{ color: vew === 'galery' ? '#058d4d' : '' }}>
                <CameraAltIcon />
                <p>Galería</p>
            </div>

            <div onClick={() => setVew('videos')} style={{ color: vew === 'videos' ? '#058d4d' : '' }}>
                <VideocamIcon />
                <p>Vidos</p>
            </div>

            {values?.category === 'premises' &&
                <div onClick={() => setVew('shifts')} style={{ color: vew === 'shifts' ? '#058d4d' : '' }}>
                    <CalendarMonthIcon />
                    <p>Turnos</p>
                </div>
            }

        </div>
    );
};

export default NewSiteButtom;