const CountrySelected = ({ handleChange, isRequired = true }) => {

    return (
        <>
            <label>País</label>
            <select name="country" onChange={handleChange} required={isRequired}>
                <option value=""></option>
                <option value="all">Todos</option>
                <option value="AR">Argentina</option>
                <option value="UY">Uruguay</option>
            </select>
        </>
    );
};

export default CountrySelected;