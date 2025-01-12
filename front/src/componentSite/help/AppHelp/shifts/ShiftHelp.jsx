import ShiftConfigDataHelp from "./ShiftConfigDataHelp/ShiftConfigDataHelp";
import ShiftConfigHelp from "./ShiftConfigHelp/ShiftConfigHelp";
import ShiftWhatIsHelp from "./ShiftWhatIsHelp/ShiftWhatIsHelp";

const ShiftHelp = () => {

    return (
        <>
            <ShiftWhatIsHelp />
            <ShiftConfigHelp />
            <ShiftConfigDataHelp /> 
        </>
    );
};

export default ShiftHelp;