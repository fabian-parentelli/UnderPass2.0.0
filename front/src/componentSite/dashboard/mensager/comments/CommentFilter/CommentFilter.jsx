import './commentFilter.scss';
import Switch from '@mui/material/Switch';

const CommentFilter = ({ isActive, setIsActive, onlyReport, setOnlyReport }) => {

    const handleChangeActive = (e) => setIsActive(e.target.checked);
    const handleChangeReport = (e) => setOnlyReport(e.target.checked);

    return (
        <div className='commentFilter'>

            <div className='commentFilterDiv'>
                <p>Activo NO</p>
                <Switch checked={isActive} onChange={handleChangeActive} />
                <p>SI </p>
            </div>

            <div className='commentFilterDiv'>
                <p>Solo mesnajes con denuncias</p>
                <Switch checked={onlyReport} onChange={handleChangeReport} />
            </div>
        </div>
    );
};

export default CommentFilter;