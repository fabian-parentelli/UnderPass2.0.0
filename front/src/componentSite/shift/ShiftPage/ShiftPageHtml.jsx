import { Link } from "react-router-dom";
import { typeShiftCategory } from "../../../utils/typeShifts.utils.js";
import ShiftAlmanac from "../../../component/shift/ShiftAlmanac/ShiftAlmanac.jsx";

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

            <section>

            </section>

        </div>
    );
};

export default ShiftPageHtml;