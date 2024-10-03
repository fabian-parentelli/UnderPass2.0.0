import './underPayLog.scss';
import UnderPayFont from '../UnderPayFont/UnderPayFont';

const UnderPayLog = ({ size, color }) => {

    return (
        <div className='underPayLog' style={{width: `${size}0` * 8 }}>

            <div className='underNewsLog'>
                <img width={`${size}00` / 2} src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1727373458/images/mkgyolv4eryynhmvt7fc.png" alt="img" />
                <div className='underNewsText'>
                    <UnderPayFont size={size} color={color} />
                </div>
            </div>

        </div>
    );
};

export default UnderPayLog;