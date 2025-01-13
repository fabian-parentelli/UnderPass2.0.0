import ShiftAdminHelp from "./ShiftAdminHelp/ShiftAdminHelp";
import ShiftBookingHelp from "./ShiftBookingHelp/ShiftBookingHelp";
import ShiftConfigDataHelp from "./ShiftConfigDataHelp/ShiftConfigDataHelp";
import ShiftConfigHelp from "./ShiftConfigHelp/ShiftConfigHelp";
import ShiftWhatIsHelp from "./ShiftWhatIsHelp/ShiftWhatIsHelp";

const ShiftHelp = () => {

    return (
        <>
            <ShiftWhatIsHelp />
            <ShiftConfigHelp />
            <ShiftConfigDataHelp /> 
            <ShiftAdminHelp />
            <ShiftBookingHelp />
        </>
    );
};

export default ShiftHelp;