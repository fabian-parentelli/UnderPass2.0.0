import ShiftAdminHelp from "./ShiftAdminHelp/ShiftAdminHelp";
import ShiftBookingHelp from "./ShiftBookingHelp/ShiftBookingHelp";
import ShiftConfigDataHelp from "./ShiftConfigDataHelp/ShiftConfigDataHelp";
import ShiftConfigHelp from "./ShiftConfigHelp/ShiftConfigHelp";
import ShiftHolidaysHelp from "./ShiftHolidaysHelp/ShiftHolidaysHelp";
import ShiftMyHlep from "./ShiftMyHelp/ShiftMyHelp";
import ShiftPostponeHelp from "./ShiftPostponeHelp/ShiftPostponeHelp";
import ShiftWhatIsHelp from "./ShiftWhatIsHelp/ShiftWhatIsHelp";

const ShiftHelp = () => {

    return (
        <>
            <ShiftWhatIsHelp />
            <ShiftConfigHelp />
            <ShiftConfigDataHelp /> 
            <ShiftAdminHelp />
            <ShiftBookingHelp />
            <ShiftMyHlep />
            <ShiftPostponeHelp />
            <ShiftHolidaysHelp />
        </>
    );
};

export default ShiftHelp;