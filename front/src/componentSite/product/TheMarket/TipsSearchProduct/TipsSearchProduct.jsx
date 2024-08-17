import './tipsSearchproduct.scss';
import SearchIcon from '@mui/icons-material/Search';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const TipsSearchproduct = ({ values, setValues }) => {

    const handleInputChange = (e) => { setValues(e.target.value) };

    return (
        <div className='tipsSearchproduct'>
            <SearchIcon />
            <input
                type="text"
                style={{ borderColor: 'white', width: '180px' }}
                placeholder='Buscar producto'
                value={values}
                onChange={handleInputChange}
            />
            <div className='filterProductReturn' onClick={() => setValues('')}>
                <ReplyAllIcon />
            </div>
        </div>
    );
};

export default TipsSearchproduct;