import { useEffect, useState } from "react";
import LineCharts from "../../../../../component/utils/chart/LineCharts";
import { graphPriceBannerApi } from "../../../../../helpers/graph/graphPriceBanner.api";

const GraphBanner = ({ country }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await graphPriceBannerApi(country);
            if (response.status === 'success') setData(response.data);
        }; fetchData();
    }, []);

    return (
        <div className='GraphBanner'>
            {data && <LineCharts data={data} />}
        </div>
    );
};

export default GraphBanner;