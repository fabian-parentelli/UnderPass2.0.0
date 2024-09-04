import { createContext, useContext, useEffect, useState } from "react";
import { getDataPassApi } from "../helpers/dataPass/getDataPass.api";

const UnderContext = createContext();
export const useUnderContext = () => useContext(UnderContext);

const UnderProvider = ({ children }) => {

    const [underData, setUnderData] = useState(null);

    useEffect(() => {
        const fecthData = async () => {
            const country = localStorage.getItem('country');
            const response = await getDataPassApi(country);
            if (response.status === 'success') setUnderData(response.result);
            else console.error(response.error);
        }; fecthData();
    }, []);

    return (
        <UnderContext.Provider value={{ underData }}>
            {children}
        </UnderContext.Provider>
    );
};

export default UnderProvider;