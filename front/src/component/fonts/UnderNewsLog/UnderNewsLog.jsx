import './underNewsLog.scss';
import UnderNewsFont from '../UnderNewsFont/UnderNewsFont';

const UnderNewsLog = ({ size, color }) => {

    return (
        <div className='underNewsLogTop' style={{width: `${size}0` * 8 }}>

            <div className='underNewsLog'>
                <img width={`${size}00` / 2} src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1727373458/images/mkgyolv4eryynhmvt7fc.png" alt="img" />
                <div className='underNewsText'>
                    <UnderNewsFont size={size} color={color} />
                </div>
            </div>

        </div>
    );
};

export default UnderNewsLog;