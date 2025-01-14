import ShiftAdminHelp from "./ShiftAdminHelp/ShiftAdminHelp";
import ShiftBookingHelp from "./ShiftBookingHelp/ShiftBookingHelp";
import ShiftConfigDataHelp from "./ShiftConfigDataHelp/ShiftConfigDataHelp";
import ShiftConfigHelp from "./ShiftConfigHelp/ShiftConfigHelp";
import ShiftMyHlep from "./ShiftMyHelp/ShiftMyHelp";
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
        </>
    );
};

export default ShiftHelp;