import './searchPublicitary.scss';
import CategorySelected from '../../../advertisting/CategorySelected/CategorySelected';
import CountrySelected from '../../banner/CountrySelected/CountrySelected';

const SearchPublicitary = ({ setQuerys }) => {

    const handleChange = (e) => setQuerys(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));

    return (
        <form className='searchPublicitary'>

            <div>
                <CategorySelected handleChange={handleChange} isRequired={false} />
            </div>

            <div>
                <CountrySelected handleChange={handleChange} isRequired={false} />
            </div>

            <div>
                <label>Activo</label>
                <select name="active" onChange={handleChange}>
                    <option value=""></option>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div>
                <label>Portal</label>
                <select name="inPortal" onChange={handleChange}>
                    <option value=""></option>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div>
                <label>Tipo</label>
                <select name="type" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Cards">Cards</option>
                    <option value="Banner">Banner</option>
                    <option value="Separator">Separador</option>
                </select>
            </div>

            <div>
                <label>Application Id</label>
                <input type="text" name='id' onChange={handleChange} />
            </div>

        </form>
    );
};

export default SearchPublicitary;