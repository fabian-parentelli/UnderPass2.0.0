import { LineChart } from '@mui/x-charts/LineChart';

const LineCharts = ({ data }) => {

    return (
        <>
            {data &&
                <LineChart
                    xAxis={[{ data: data.labels }]}
                    series={data.series}
                    height={300}
                    width={400}
                    colors={['#f45c14']}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                />
            }
        </>
    );
};

export default LineCharts;