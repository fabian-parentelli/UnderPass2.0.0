import './underShiftsLog.scss';
import UnderShiftsFont from '../UnderShiftsFont/UnderShiftsFont';

const UnderShiftsLog = ({ size, color }) => {

    return (
        <div className='underMarketLog' style={{width: `${size}0` * 8 }}>

            <div className='underNewsLog'>
                <img width={`${size}00` / 2} src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1727373458/images/mkgyolv4eryynhmvt7fc.png" alt="img" />
                <div className='underNewsText'>
                    <UnderShiftsFont size={size} color={color} />
                </div>
            </div>

        </div>
    );
};

export default UnderShiftsLog;