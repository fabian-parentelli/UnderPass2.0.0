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

const SiteUpdateButtons = ({ site, vew, setVew }) => {

    return (
        <div className='siteUpdateButtons'>

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

            {site?.category === 'art' &&
                (site?.subCategory === 'musicalGroup' || site?.subCategory === 'play' ||
                    site?.subCategory === 'danceGroup'
                    ? <div onClick={() => setVew('castAll')} style={{ color: vew === 'castAll' ? '#058d4d' : '' }} >
                        <GroupsIcon />
                        <p>Elenco</p>
                    </div>
                    : <div>
                        <AccessibilityIcon />
                        <p>Persona</p>
                    </div>
                )
            }

            {site?.category === 'stream' &&
                (site?.subCategory === 'lives' || site?.subCategory === 'documentals' ||
                    site?.subCategory === 'publications'
                    ? <div onClick={() => setVew('castAll')} style={{ color: vew === 'castAll' ? '#058d4d' : '' }} >
                        <GroupsIcon />
                        <p>Elenco</p>
                    </div>
                    : <div>
                        <AccessibilityIcon />
                        <p>Persona</p>
                    </div>
                )
            }

            {(site.category === 'art') && (site.subCategory === 'musicalGroup' || site.subCategory === 'solist') &&
                <div>
                    <GraphicEqIcon />
                    <p>Discografía</p>
                </div>
            }

            <div>
                <ShoppingBagIcon />
                <p>Productos</p>
            </div>

            <div>
                <CameraAltIcon />
                <p>Galería</p>
            </div>

            <div>
                <VideocamIcon />
                <p>Vidos</p>
            </div>

            {site.category === 'premises' || site.category === 'trade' &&
                <div>
                    <CalendarMonthIcon />
                    <p>Turnos</p>
                </div>
            }

        </div>
    );
};

export default SiteUpdateButtons;