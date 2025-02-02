import { Link } from "react-router-dom";
import BusinessIcon from '@mui/icons-material/Business';
import MapView from "../../../component/utils/MapVew.jsx";
import { typeShiftCategory } from "../../../utils/typeShifts.utils.js";
import ShiftAlmanac from "../../../component/shift/ShiftAlmanac/ShiftAlmanac.jsx";
import Messages from "../../../component/messages/Messages/Messages.jsx";
import UnderShiftsLog from "../../../component/fonts/UnderShiftsLog/UnderShiftsLog.jsx";

const ShiftPageHtml = ({ config }) => {

    return (
        <div className='shiftPage'>
            <p className="shiftPageHelpP"><Link to={'/help'} className="shiftPageHelpLink">Ayuda</Link></p>
            <h2>{typeShiftCategory(config.category)} {config.title}</h2>

            <section className="shiftPageLocation">
                <p className="pgray">{config.location.address}</p>
                <p className="pgray">{config.location.city}</p>
                <p className="pgray">{config.location.province}</p>
            </section>

            <section className="shiftPageDescription">
                <img src={config.img.url} alt="img" />
                <p>{config.description}</p>
            </section>

            <section className="shiftPageCalendar">
                <ShiftAlmanac config={config} />
            </section>

            {config.location.coordinates &&
                <section className="shiftPageMap">
                    <div className="shiftPageMapDiv">
                        <BusinessIcon className="shiftPageMapDivIcon" />
                        <p>{config.location.address}</p>
                        <p>{config.location.city}</p>
                        <p>{config.location.province}</p>
                        <button className="btn btnSH">Chat</button>

                    </div>
                    <div className="shiftPageMapVew">
                        <MapView coordinates={config?.location?.coordinates} />
                    </div>
                </section>
            }

            <section className="shiftPageMessages">
                <Messages type='shift' typeId={config._id} />
            </section>

            <section className="shiftPageLogo">
                <UnderShiftsLog size={3} />
            </section>

        </div>
    );
};

export default ShiftPageHtml;