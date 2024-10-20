import { useEffect, useState } from "react";

const EventFilterLocation = ({ values }) => {

    const [options, setOptions] = useState([]);
    const [province, setprovince] = useState(null);

    useEffect(() => {
        const onlyEvents = values.filter(e => e.type === 'event');
        const opt = [];
        onlyEvents.forEach((even) => {
            const index = opt.find(e => e.province === even.location.province);
            if (!index) opt.push({ province: even.location.province, cities: [] });
        });

        onlyEvents.forEach((even) => {
            const index = opt.findIndex(e => e.province === even.location.province);
            const city = opt[index].cities.findIndex(cit => cit === even.location.city)
            if (city === -1) opt[index].cities.push(even.location.city);
        })
        setOptions(opt);
    }, []);

    const handleProvince = (e) => {
        if (e.target.value === '') setprovince(null);
        else setprovince(e.target.value);

        // Hacer esto mas simple, mucho pero mucho mas simple
        // Hacer esto mas simple, mucho pero mucho mas simple
        // Hacer esto mas simple, mucho pero mucho mas simple
        // Hacer esto mas simple, mucho pero mucho mas simple
        // Hacer esto mas simple, mucho pero mucho mas simple
        // Hacer esto mas simple, mucho pero mucho mas simple
        // Hacer esto mas simple, mucho pero mucho mas simple

        // que venga de la base de datos, todos con la misma provincia y 
        // hacer un filtro con las cudades que tengas esas provincias 
        // pero estoa si como esta no sirve....... 

    };

    console.log(province);
    console.log(options);

    return (
        <>
            <div>
                <select name="province" onChange={handleProvince}>
                    <option value="">Provincia</option>
                    {options && options.map((n, index) => (
                        <option key={index} value={n.province}>{n.province}</option>
                    ))}
                </select>
            </div>

            <div>
                <select name="city" >
                    <option value="">Ciudades</option>
                    {province && options.map((eve, ind) => (
                        province === eve.province && eve.cities.map((cit, ind) => (
                            <option key={ind} value={cit}>{cit}</option>
                        ))
                    ))}
                </select>
            </div>
        </>
    );
};

export default EventFilterLocation;